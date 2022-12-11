import { menuActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-6161a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }

      const data = await response.json();
      dispatch(cartActions.replaceCart({
        items: data.items || []
      }));
    };

    try {
      const cartData = await fetchData();
      return cartData;
    } catch (error) {
      dispatch(
        menuActions.showNotification({
          satus: "error",
          title: "error",
          message: "error fetching cart data",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      menuActions.showNotification({
        satus: "pending",
        title: "Sending",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-6161a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        menuActions.showNotification({
          satus: "success",
          title: "success",
          message: "success sending cart data",
        })
      );
    } catch (error) {
      dispatch(
        menuActions.showNotification({
          satus: "error",
          title: "error",
          message: "error sending cart data",
        })
      );
    }
  };
};
