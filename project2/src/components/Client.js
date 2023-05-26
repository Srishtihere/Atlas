import "../App.css"
import client1 from "../img/client-1.png"
import client2 from "../img/client-2.png"
import client3 from "../img/client-3.png"
import client4 from "../img/client-4.png"
import client5 from "../img/client-5.png"
import client6 from "../img/client-6.png"

const Client = () => {
  return(
    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src={client1} alt="client" class="mx-auto d-block"/>
                </div>
                <div class="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src={client2} alt="client" class="mx-auto d-block"/>
                </div>
                <div class="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src={client3} alt="client" class="mx-auto d-block"/>
                </div>
                <div class="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src={client4} alt="client" class="mx-auto d-block"/>
                </div>
                <div class="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src={client5} alt="client" class="mx-auto d-block"/>
                </div>
                <div class="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src={client6} alt="client" class="mx-auto d-block"/>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Client;