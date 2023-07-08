
const { createApp } = Vue

createApp({
  data() {
    return {
      contacts: [
        {
        name: 'Flavio',
        avatar: './img/avatar_1.jpg',
        visible: true,
        messages: [
                    {
                    date: '15:30',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '15:50',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                    },
                    {
                    date: '16:15',
                    message: 'Tutto fatto!',
                    status: 'received'
                    }
        ],
        },
        {
        name: 'Ben',
        avatar: './img/avatar_2.jpg',
        visible: true,
        messages: [
                    {
                    date: '16:30',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '16:30',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '16:35',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
        ],
        },
        {
        name: 'Andre',
        avatar: './img/avatar_3.jpg',
        visible: true,
        messages: [
                    {
                    date: '10:10',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    date: '10:20',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '16:15',
                    message: 'Ah scusa!',
                    status: 'received'
                    }
        ],
        },
        {
        name: 'Biondi',
        avatar: './img/avatar_4.jpg',
        visible: true,
        messages: [
                    {
                    date: '15:30',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    date: '15:50',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    }
        ],
        },
        {
        name: 'Alex',
        avatar: './img/avatar_5.jpg',
        visible: true,
        messages: [
                    {
                    date: '15:30',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                    },
                    {
                    date: '15:50',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                    }
        ],
        },
        {
        name: 'Michelle',
        avatar: './img/avatar_6.jpg',
        visible: true,
        messages: [
                    {
                    date: '15:30',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                    },
                    {
                    date: '15:50',
                    message: 'Non ancora',
                    status: 'received'
                    },
                    {
                    date: '15:51',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                    }
        ],
        },
        {
        name: 'Nick',
        avatar: './img/avatar_7.jpg',
        visible: true,
        messages: [
                    {
                    date: '15:30',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                    },
                    {
                    date: '15:50',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                    }
        ],
        },
        {
        name: 'Dadda',
        avatar: './img/avatar_8.jpg',
        visible: true,
        messages: [
                    {
                    date: '15:30',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                    },
                    {
                    date: '15:50',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                    },
                    {
                    date: '15:51',
                    message: 'OK!!',
                    status: 'received'
                    }
        ],
        }
        ],
      notification: false,
      contactIndex: 0,
      currentMsg: "",
      filteredArray: [],
      contactToSearch: "",
      filteredContacts : []
    }
  },
  created() {
    this.filteredContacts = this.contacts; // Initialize filteredContacts with all contacts
  },
  methods:{
    switchNotification(){
      this.notification = true
    },
    selectContact(index){
      this.contactIndex = index
    },
    onEnter(){
      this.contacts[this.contactIndex].messages.push(
        {
          date: this.getCurrentTime(),
          message: this.currentMsg,
          status: 'sent'
        }
      )
      this.currentMsg = ""
      const myTime = setTimeout(this.reply, 1000);
    },
    reply(){
      this.contacts[this.contactIndex].messages.push(
        {
          date: this.getCurrentTime(),
          message: "ok",
          status: 'received'
        }
      )
    },
    filterArray(){
      let nameArr = [];
      this.contacts.forEach(element => {
        nameArr.push(element.name.toLowerCase());
      });
      this.filteredContacts = this.contacts.filter((contact) => {
        const contactName = contact.name.toLowerCase();
        return contactName.includes(this.contactToSearch.toLowerCase());
      });
    },
    getCurrentTime(){
      const now = luxon.DateTime.now();
      const currentHour = now.hour;
      const currentMinutes = now.toFormat("mm");
      return `${currentHour}:${currentMinutes}`
    } 
  }
}).mount('#app')