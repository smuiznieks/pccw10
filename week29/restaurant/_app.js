// Remove unused imports
import { useState } from "react";
import Head from "next/head";
import AppContext from "../components/context";
import Layout from "../components/layout";

// This is the default state value from context.js
// I am copying here so we can set the default state to the same value
// This avoids a circular dependency
const defaultCart = { items: [], total: 0 };

// destructure the props at a higher level (originally on line 12)
function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({ cart: defaultCart }); // updated default state value
  const [user, setUser] = useState(false); // create a separate state value for user

  // The following functions (setUserState, addItem, and removeItem) will be used by the context
  const setUserState = (user) => {
    setUser(user);
  };

  const addItem = (item) => {
    let { items } = state.cart;
    //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    let foundItem = true;
    if (items.length > 0) {
      foundItem = items.find((i) => i.id === item.id);

      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }
    // console.log(`Found Item value: ${JSON.stringify(foundItem)}`)
    // if item is not new, add to cart, set quantity to 1
    if (!foundItem) {
      //set quantity property to 1

      let temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
        items: [...state.cart.items, temp],
        total: state.cart.total + item.price,
      };
      setState({ cart: newCart });
      // console.log(`Total items: ${JSON.stringify(newCart)}`)
    } else {
      // we already have it so just increase quantity ++
      // console.log(`Total so far:  ${state.cart.total}`)
      newCart = {
        items: items.map((item) => {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, { quantity: item.quantity + 1 });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price,
      };
    }
    setState({ cart: newCart }); // problem is this is not updated yet
    // console.log(`state reset to cart:${JSON.stringify(state)}`)
  };

  const removeItem = (item) => {
    let { items } = state.cart;
    //check for item already in cart
    const foundItem = items.find((i) => i.id === item.id);
    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map((item) => {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, { quantity: item.quantity - 1 });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price,
      };
      // console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else {
      // only 1 in the cart so remove the whole item
      // console.log(`Try remove item ${JSON.stringify(foundItem)}`)
      const index = items.findIndex((i) => i.id === foundItem.id);
      items.splice(index, 1);
      var newCart = { items: items, total: state.cart.total - item.price };
    }
    setState({ cart: newCart });
  };

  return (
    // THIS IS THE MORE IMPORTANT PIECE OF CODE!!!!
    // This is how the rest of our components will be able to update the cart and/or user
    // Hint: this is the same as writing:
    // <AppContext.Provider value={{cart: state.cart, addItem: addItem, removeItem: removeItem, isAuthenticated:false,user,setUser: setUserState}}>
    <AppContext.Provider
      value={{
        cart: state.cart,
        addItem,
        removeItem,
        isAuthenticated: false,
        user,
        setUser: setUserState,
      }}
    >
      <Head>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
          integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
          crossOrigin='anonymous'
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
