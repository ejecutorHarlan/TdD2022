import {
  setProducts,
  showProducts,
  dismissIsLoading,
  setIsLoading,
  deleteProducts,
  showClient,
  islogged,
  closeSession,
  getAuto,
  setDate,
} from './actions.js';

export const setFecha = async (dispatch, dataFecha) => {
  try {
    console.log('adentro del setdate', dataFecha);
    //const id = { idCliente: 'bbilesj@github.io' };
    dispatch(setIsLoading());
    let response = await fetch('http://localhost:3000/turn', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fechaTurno: dataFecha.fechaTurno,
        idClienteReparacion: dataFecha.idClienteReparacion,
      }),
    });

    let dataClient = await response.json();

    if (response.status !== 200) {
      dispatch(setProducts([]));
      dismissIsLoading();
    } else {
      //console.log('Parece que anduvo con redux', dataClient);
      dispatch(islogged());
      dispatch(setDate(dataClient));

      //dispatch(dismissIsLoading());
    }
    dismissIsLoading();
  } catch (error) {
    throw new Error(error);
  }
};

export const getAutoCliente = async (dispatch, id) => {
  console.log('iddd', id);
  try {
    console.log('adentro del dispatch Auto');
    const url = `http://localhost:3000/car/` + id;
    console.log('url', url);
    //const url = 'http://localhost:3000/car/bnockells8@bluehost.com';
    //dispatch(setIsLoading());
    let response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let dataCar = await response.json();
    console.log('datacar', dataCar);

    if (response.status !== 200) {
      dispatch(setProducts([]));
      dismissIsLoading();
    } else {
      dispatch(getAuto(dataCar));
    }
    dismissIsLoading();
  } catch (error) {
    throw new Error(error);
  }
};

export const getClient = async (dispatch, id) => {
  try {
    console.log('adentro del dispatch');
    //const id = { idCliente: 'bbilesj@github.io' };
    dispatch(setIsLoading());
    let response = await fetch('http://localhost:3000/aclientes', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idCliente: id }),
    });

    let dataClient = await response.json();

    if (response.status !== 200) {
      dispatch(setProducts([]));
      dismissIsLoading();
    } else {
      //console.log('Parece que anduvo con redux', dataClient);
      dispatch(islogged());
      dispatch(showClient(dataClient));

      //dispatch(dismissIsLoading());
    }
    dismissIsLoading();
  } catch (error) {
    throw new Error(error);
  }
};

export const closeSess = async (dispatch, id) => {
  try {
    console.log('adentro del close Session');
    dispatch(closeSession());
    //   dispatch(setIsLoading());
    //   let response = await fetch('http://localhost:3000/aclientes', {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ idCliente: id }),
    //   });

    //   let dataClient = await response.json();

    // if (response.status !== 200) {
    //   dispatch(setProducts([]));
    //   dismissIsLoading();
    // } else {
    //   dispatch(showClient(dataClient));
    // }
    // dismissIsLoading();
  } catch (error) {
    throw new Error(error);
  }
};

export const getProducts = async (dispatch) => {
  try {
    dispatch(setIsLoading());
    let response = await fetch(
      'https://mcga-2022-backend.vercel.app/api/products',
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: 'b62102c1-62be-4b52-b055-589cf7a81a30',
        },
      }
    );

    let data = await response.json();

    if (response.status !== 200) {
      dispatch(setProducts([]));
      dismissIsLoading();
    } else {
      dispatch(setProducts(data.data));
      dispatch(dismissIsLoading());
    }
    dismissIsLoading();
  } catch (error) {
    throw new Error(error);
  }
};

export const addProducts = async (dispatch, product) => {
  try {
    dispatch(setIsLoading());
    let response = await fetch(
      'https://mcga-2022-backend.vercel.app/api/products',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'b62102c1-62be-4b52-b055-589cf7a81a30',
        },
        body: JSON.stringify(product),
      }
    );
    let data = await response.json();

    if (response.status !== 200) {
      dismissIsLoading();
    } else {
      dismissIsLoading();
      await getProducts(dispatch);
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteItem = async (dispatch, idToDelete) => {
  try {
    const url =
      'https://mcga-2022-backend.vercel.app/api/products/delete/' + idToDelete;

    dispatch(setIsLoading());

    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'b62102c1-62be-4b52-b055-589cf7a81a30',
      },
    });
    let data = await response.json();

    if (response.status !== 200) {
      dismissIsLoading();
    } else {
      dismissIsLoading();
      await getProducts(dispatch);
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const modifyItem = async (dispatch, prodToModify) => {
  try {
    const product = {};
    product._id = prodToModify._id;
    product.name = prodToModify.nameEdit;
    product.price = prodToModify.priceEdit;
    product.stock = prodToModify.stockEdit;
    product.description = prodToModify.descriptionEdit;

    const url =
      'https://mcga-2022-backend.vercel.app/api/products/update/' + product._id;
    dispatch(setIsLoading());
    let response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'b62102c1-62be-4b52-b055-589cf7a81a30',
      },
      body: JSON.stringify(product),
    });
    let data = await response.json();

    if (response.status !== 200) {
      dismissIsLoading();
    } else {
      dismissIsLoading();
      await getProducts(dispatch);
    }
  } catch (error) {
    throw new Error(error);
  }
};
export const getProductsPublic = async (dispatch) => {
  try {
    dispatch(setIsLoading());
    let response = await fetch(
      'https://mcga-2022-backend.vercel.app/api/products/public'
    );

    let data = await response.json();

    if (response.status !== 200) {
      dispatch(setProducts([]));
      dismissIsLoading();
    } else {
      dispatch(setProducts(data.data));
      dispatch(dismissIsLoading());
    }
    dismissIsLoading();
  } catch (error) {
    throw new Error(error);
  }
};
