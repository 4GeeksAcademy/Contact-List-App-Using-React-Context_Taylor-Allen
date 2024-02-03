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
      contacts: [
        {
          full_name: "fake name",
          email: "fake email",
          agenda_slug: "fake_slug",
          address: "fake address",
          phone: "fake phone",
          id: 0,
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
        setStore({ contacts: [...currentContacts, data] });
      },

      getContacts: async () => {
        let response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/taylor-allen",
          {
            method: "GET",
            headers: { "Content-type": "application/json" },
          }
        );
        let data = await response.json();
        setStore({ contacts: data });

        return getStore().contacts;
      },

      updateContact: async (contactId, attribute, value) => {
        const store = getStore();
        store.contactInformation.map(() => {});
        const updatedContacts = store.contactInformation.map((contact) => {
          if (contactid === contactId) {
            console.log("from the action, contactId has been found");
            return {
              ...contact,
              [attribute]: value,
            };
          }
          return contact;
        });
        // );
        // let data = await response.json();

        // const currentContacts = getStore().contacts;
        // const updatedContacts = currentContacts.map((contact) =>
        //   contact.id === id ? data : contact
        // );
        console.log(
          updatedContacts,
          "this is updatedContacts from the action, shows what contactInformation is being fed"
        );
        setStore({ contactInformation: updatedContacts });
      },

      saveUpdatedContact: async (contactId, name, email, address, phone) => {
        const response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/${contactId}",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              full_name: name,
              email: email,
              address: address,
              phone: phone,
              agenda_slug: "taylor-allen",
            }),
          }
        );
      },

      deleteContact: async (id) => {
        const apiURL = "https://playground.4geeks.com/apis/fake/contact/" + id;

        fetch(apiURL, {
          method: "DELETE",
        });

        setStore({
          contacts: getStore().contacts.filter((contact) => contact.id !== id),
        });
      },
    },
  };
};

export default getState;
