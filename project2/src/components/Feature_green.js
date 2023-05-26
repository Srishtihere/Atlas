import "../App.css"
import feature2 from "../img/feature-2.png";
const Feature_green = () => {
  return (
    <>
      <div class="jumbotron jumbotron-fluid feature" id="feature-last">
        <div class="container">
          <div class="row justify-content-between text-center text-md-left">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
              class="col-md-6 flex-md-last"
            >
              <h2 class="font-weight-bold">Safe and reliable</h2>
              <p class="my-4">
                Duo suas detracto maiestatis ad, commodo lucilius invenire nec
                ad,
                <br /> eum et oratio disputationi. Falli lobortis his ad
              </p>
              <a href="#" class="btn my-4 font-weight-bold atlas-cta cta-blue">
                Learn More
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              class="col-md-6 align-self-center flex-md-first"
            >
              <img
                src={feature2}
                alt="Safe and reliable"
                class="mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature_green;
