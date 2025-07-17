

const footerContent=`
     <div class="grid grid-four--cols">
                <div class="footer-div">
                       <div class="header-center--div">
                          <p class="logo-text">Oshune.</p>
                        </div>
                       <p class="first-div--footer">Clean, effective skincare designed to nourish, protect, and delier real results naturally.</p>
                       <div class="footer-cards">
                           <img src="/src/assests/cards.png" alt="cards">

                       </div>
                     

                </div>
                <div class="footer-div">
                      <h4>Shopping</h4>
                      <ul>
                        <li>Skincare</li>
                        <li>Makeup</li>
                        <li>BodyCare</li>
                      </ul>
                </div>

                
                <div class="footer-div">
                      <h4>Experience</h4>
                      <ul>
                        <li>Contact Us</li>
                        <li>Payment Method</li>
                        <li>Delivery</li>
                      </ul>
                </div>

                
                <div class="footer-div">
                      <h4>Newsletter</h4>
                      <p>Be the first to be notified about our arrivals, sale and discounts.</p>
                      <div class="footer-email">
                        <input type="email" placeholder ="Your Email"><button class="btn">Subscribe</button>

                      </div>

                </div>
            </div>
            <div class="f-design">
                <div class="f-design-txt">
                    <p>Made with ❤️ by Sanjila Gangaju</p>
                </div>
            </div>
            

`
const footerElem= document.querySelector('.footer-container');
footerElem.insertAdjacentHTML("afterbegin", footerContent);