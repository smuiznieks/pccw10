const { useState, useEffect, useReducer } = React;
const {
  Card,
  Accordion,
  Button,
  Container,
  Row,
  Col,
  Image,
  Input,
} = ReactBootstrap;

// simulate getting products from DataBase
// const products = [
//   { name: "Apples", country: "Italy", cost: 3, inStock: 10 },
//   { name: "Oranges", country: "Spain", cost: 4, inStock: 3 },
//   { name: "Beans", country: "USA", cost: 2, inStock: 5 },
//   { name: "Cabbage", country: "USA", cost: 1, inStock: 8 },
// ];

// /helpers/useDataApi.jsx
const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  // console.log(`useDataApi called`);

  useEffect(() => {
    console.log("useEffect Called");
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        // console.log("FETCH FROM URl");
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);


  return [state, setUrl];
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

// /component/Products.jsx
// import useDataApi ...
const Products = (props) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("http://localhost:1337/api/products");
  const [{ data }, apiCall] = useDataApi(
    "http://localhost:1337/api/products",
    {
      data: [],
    }
  );

  // console.log(`Rendering Products ${JSON.stringify(data)}`);

  const addToCart = (e) => {
    let name = e.target.name;
    let item = items.find((item) => item.name === name);

    if (item.inStock < 1) {
      alert('Out of stock!');
      return;
    }

    // console.log(`add to Cart ${JSON.stringify(item)}`);
    setCart([...cart, item]);
    setItems((currentState) => {
      let updateQuantity = currentState.find(x => x.name === item.name);
      updateQuantity.inStock--;
      return currentState;
    })
  };

  const deleteCartItem = (index) => {
    let newCart = cart.filter((item, i) => index != i);
    setCart(newCart);

    let itemToRestock = items.find((item, i) => i === index);
    // console.log(itemToRestock);
    setItems((currentState) => {
      let restockItem = currentState.find(x => x.name === itemToRestock.name);
      restockItem.inStock++;
      return currentState;
    })
  };

  const photos = ["apple.png", "orange.png", "beans.png", "cabbage.png"];

  let list = items.map((item, index) => {
    return (
      <li key={index}>
        <Image src={photos[index % 4]} width={70} roundedCircle></Image>
        <p>{item.name} ${item.cost}</p>
        <p>Quantity: {item.inStock}</p>
        <Button name={item.name} type="button" onClick={addToCart}>Add to Cart</Button>
      </li>
    );
  });

  let cartList = cart.map((item, index) => {
    return (
      <Card key={index}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={1 + index}>
            {item.name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse
          onClick={() => deleteCartItem(index)}
          eventKey={1 + index}
        >
          <Card.Body>
            $ {item.cost} from {item.country}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  let finalList = () => {
    let total = checkOut();
    let final = cart.map((item, index) => {
      return (
        <div key={index} index={index}>
          {item.name}
        </div>
      );
    });

    return { final, total };
  };

  const checkOut = () => {
    let costs = cart.map((item) => item.cost);
    const reducer = (accum, current) => accum + current;
    let newTotal = costs.reduce(reducer, 0);
    // console.log(`total updated to ${newTotal}`);
    return newTotal;
  };
  
  // TODO: implement the restockProducts function
  const restockProducts = (url) => {
    // ADD CODE HERE!!!
    console.log('restocking products...');
    apiCall(url);
    console.log(data);
    // TO DO: rename data to something more helpful so we can call something.data.map()
    let newItems = data.data.map((newItem) => {
      console.log(newItem);
      let { cost, country, inStock, name } = newItem.attributes;
      return { cost, country, inStock, name };
    })

    // setItems([...items, ...newItems]);

    setItems((currentItems) => {
      if (currentItems.length < 1) {
        return newItems;
      }
      
      currentItems.forEach(currentItem => {
        let restockQuantity = newItems.find(y => y.name === currentItem.name).inStock;
        currentItem.inStock += restockQuantity;
        console.log(currentItem);
        console.log(restockQuantity);
      })

      return [...currentItems];
    })
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Product List</h1>
          <ul style={{ listStyleType: "none" }}>{list}</ul>
        </Col>
        <Col>
          <h1>Cart Contents</h1>
          <Accordion>{cartList}</Accordion>
        </Col>
        <Col>
          <h1>CheckOut </h1>
          <Button onClick={checkOut}>CheckOut $ {finalList().total}</Button>
          <div> {finalList().total > 0 && finalList().final} </div>
        </Col>
      </Row>
      <Row>
        <form
          onSubmit={(event) => {
            restockProducts(query);
            // console.log(`Restock called on ${query}`);
            event.preventDefault();
          }}
        >
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Button type="submit">ReStock Products</Button>
        </form>
      </Row>
    </Container>
  );
};

// ========================================
ReactDOM.render(<Products />, document.getElementById("root"));
