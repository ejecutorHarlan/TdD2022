export const addClient = async (client) => {
  try {
    let response = await fetch('http://localhost:3000/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

        // authorization: "b62102c1-62be-4b52-b055-589cf7a81a30",
      },
      body: JSON.stringify(client),
    });
    let data = await response.json();

    //   if (response.status !== 200) {
    //     dismissIsLoading();
    //   } else {
    //     dismissIsLoading();
    //     await getProducts(dispatch);
    //   }
  } catch (error) {
    throw new Error(error);
  }
};

export const getClientById = async (req, res) => {
  //console.log('REEQ solito', req.idCliente);
  //const datosClientes = [];
  const id = { idCliente: req.idCliente };
  try {
    let response = await fetch('http://localhost:3000/aclientes', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    });
    let dataClient = await response.json();
    var datosClientes = dataClient;

    if (response.status !== 200) {
      //dismissIsLoading();
    } else {
      //dismissIsLoading();
      //await getProducts(dispatch);
      console.log('Parece que anduvo', dataClient);
    }
  } catch (error) {
    throw new Error(error);
  }
};
