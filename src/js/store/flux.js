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

      deleteContacts: async (id) => {
        const url = "https://playground.4geeks.com/apis/fake/contact/" + id;
        const options = {
          method: "DELETE",
        };

        try {
          const response = await fetch(url, options);

          if (!response.ok) {
            console.error("Error:", response.status, response.statusText);
            const errorData = await response.json();
            console.error("Error Data:", errorData);
            return;
          }

          const data = await response.json();
          console.log("Deleted contact:", data);
          getActions().getContacts();
        } catch (error) {
          console.error("Network error:", error);
        }
      },
    },
  };
};

export default getState;
