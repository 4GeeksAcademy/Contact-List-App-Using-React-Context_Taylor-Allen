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
      getContacts: () => {
        fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/taylor-allen"
        )
          .then((resp) => {
            if (!resp.ok) throw Error(resp.statusText);
            return resp.json();
          })
          .then((data) => {
            console.log(data);

            // Set the retrieved contacts data in the store
            setStore({ contacts: data });
          })
          .catch((error) => {
            console.log(error);
          });
      },

      addContacts: (contactData) => {
        const url = "https://playground.4geeks.com/apis/fake/contact/";
        const request = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        };

        fetch(url, request)
          .then((resp) => {
            if (!resp.ok) throw Error(resp.statusText);
            return resp.json();
          })
          .then((data) => {
            console.log(data);
            getActions().getContacts();
          })
          .catch((error) => {
            console.log(error);
          });
      },

      deleteContacts: (id) => {
        const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
        const request = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };

        fetch(url, request)
          .then((resp) => {
            if (!resp.ok) throw Error(resp.statusText);
            return resp.json();
          })
          .then((data) => {
            console.log(data);
            getActions().getContacts();
          })
          .catch((error) => {
            console.log(error);
          });
      },

      editContact: (id, contactData) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        })
          .then((resp) => {
            if (!resp.ok) throw Error(resp.statusText);
            return resp.json();
          })
          .then((data) => {
            console.log(data);
            getActions().getContacts();
          })
          .catch((error) => {
            console.error("Error", error);
          });
      },
    },
  };
};

export default getState;
