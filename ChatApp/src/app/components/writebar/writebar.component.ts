import { Component , OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-writebar',
  templateUrl: './writebar.component.html',
  styleUrls: ['./writebar.component.css'],
})
export class WritebarComponent {

  message:string[] = [];
  newMessage:string = "";

  ngOnInit(){
    this.newMessage;
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('Valeur saisie :', this.newMessage);
      if (this.newMessage != "")
      this.addMessage();
      
      this.newMessage = "";
      // scrollToBottom();
    }
  }
  
  onSubmit() {
    console.log('Phrase saisie :', this.newMessage);
    if (this.newMessage != "")
      this.addMessage();
      this.newMessage = "";
      console.log('List message :', this.message);
      // scrollToBottom();

  }

  addMessage() {
    this.message.push(this.newMessage);
  }
  
  
}

// @ViewChild('chatMessagesRef', { static: true }) chatMessagesRef: ElementRef;

// function scrollToBottom() {
//   const chatMessages = document.getElementById("msg");
//   if (chatMessages)
//     chatMessages.scrollTop = chatMessages.scrollHeight;
// }
