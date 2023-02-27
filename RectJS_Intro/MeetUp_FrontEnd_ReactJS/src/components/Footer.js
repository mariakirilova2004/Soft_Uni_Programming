import FooterHtmlForm from "./FooterHtmlForm";

export default function Footer() {
    return(
        <div className="container-fluid footer">
    <div className="row contact">
      <div className="col-md-6 contact-htmlForm">
        <h3 className="content-ct"><span className="ti-email"></span> Contact htmlForm</h3>
        <htmlForm className="htmlForm-horizontal" data-toggle="validator" role="htmlForm">
          <FooterHtmlForm/>
        </htmlForm>
      </div>
      <div className="col-md-4 col-md-offset-1 content-ct">
        <h3><span className="ti-twitter"></span> Twitter Feed</h3>
        <p>Lorem <a href="#">#Ipsum</a> is a dummy text used as a text filler in designs. This is just a dummy text. via <a href="#">@designerdada</a> </p>
        <hr/>
        <p>Lorem Ipsum is a <a href="#">#dummy</a> text used as a text filler in designs. This is just a dummy text. via <a href="#">@designerdada</a> </p>
        <hr/>
        <p>Lorem Ipsum is a <a href="#">#dummy</a> text used as a text filler in designs. This is just a dummy text. via <a href="#">@designerdada</a> </p>
      </div>
    </div>
    <div className="row footer-credit">
      <div className="col-md-6 col-sm-6">
        <p>&copy; 2015, <a href="http://www.designerdada.com">DesignerDada.com</a> | All rights reserved.</p>
      </div>
      <div className="col-md-6 col-sm-6"> 
        <ul className="footer-menu">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms &amp; Condition</a></li>
        </ul>
      </div>
    </div>
  </div>
  ); 
}