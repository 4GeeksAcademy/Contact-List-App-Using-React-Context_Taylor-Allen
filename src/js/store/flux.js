const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      addContact: async (name, phone, email, address) => {
        let response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/",
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: {
              full_name: name,
              email: email,
              agenda_slug: "josenoway",
              address: address,
              phone: phone,
            },
          }
        );
        let data = await response.json();
        setStore({ contacts: [...contact, data] });
      },

      getContacts: async () => {
        let response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/taylor-allen"
        );
        let data = await response.json();
        setStore({ contacts: data });

        return getStore.contacts;
      },

      updateContact: async (name, phone, email, address, id) => {
        let response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda" + id,
          {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: {
              full_name: name,
              email: email,
              agenda_slug: "taylor-allen",
              address: address,
              phone: phone,
            },
          }
        );
        let data = await response.json();
        setStore({ contacts: [...contact, data] });
      },

      deleteContact: async (id) => {
        let response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/" + id,
          {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
          }
        );
        let data = await response.json();
        setStore({ contacts: contacts.filter((contact) => contact.id !== id) });
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
