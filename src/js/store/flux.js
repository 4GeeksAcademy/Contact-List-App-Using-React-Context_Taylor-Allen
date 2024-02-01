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
      contacts: [],
    },
    actions: {
      addContact: async (name, phone, email, address) => {
        let response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/",
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              full_name: name,
              email: email,
              agenda_slug: "my_super_agenda",
              address: address,
              phone: phone,
            }),
          }
        );
        let data = await response.json();

        const currentContacts = getStore().contacts;
        setStore({ contacts: [...currentContacts, data] });
      },
      getContacts: async () => {
        let response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/taylor-allen"
        );
        let data = await response.json();
        setStore({ contacts: data });

        return getStore().contacts;
      },
      updateContact: async (name, phone, email, address, id) => {
        let response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/" + id,
          {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              full_name: name,
              email: email,
              agenda_slug: "taylor-allen",
              address: address,
              phone: phone,
            }),
          }
        );
        let data = await response.json();

        const currentContacts = getStore().contacts;
        const updatedContacts = currentContacts.map((contact) =>
          contact.id === id ? data : contact
        );

        setStore({ contacts: updatedContacts });
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

        setStore({
          contacts: getStore().contacts.filter((contact) => contact.id !== id),
        });
      },
      exampleFunction: () => {
        // Uncomment this function if needed
        // getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        // Uncomment this function if needed
        // fetch().then().then(data => setStore({ "foo": data.bar }))
      },
      // changeColor function removed
    },
  };
};

export default getState;
