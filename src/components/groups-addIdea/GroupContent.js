import React, { Component } from 'react'

 class GroupContent extends Component {
    render() {
        return (
            <div className="container form-content">
             <div className="head-idea mb-1">
             <p>New, <span>Idea</span> </p>
             </div>
                <div className="row">
                
                    <div className="col-8  shadow bg-white border ">
                <form className="m-2 mt-3">
  <div className="form-row">
  <div className="form-group col-12">
    <label className="ml-2 text-muted" for="inputAddress">Idea Title</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Title" />
  </div>
    <div className="form-group col-md-6">
      <label className="ml-2 text-muted " for="inputEmail4">Idea Title</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Title" />
    </div>
    <div className="form-group col-md-6">
      <label className="ml-2 text-muted" for="inputPassword4">Idea Title</label>
      <input type="text" className="form-control" id="inputPassword4" placeholder="Title" />
    </div>

    <div className="form-group col-12">
    <label className="text-muted ml-2" for="exampleFormControlTextarea1">Text area</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
     </textarea>
  </div>


  </div>

  
  <button type="submit" className="btn ml-2 mt-5 w-25  mr-2 p-3 shadow mb-5   btn-primary"> <i className="fas fa-cloud-upload-alt"></i> Upload</button>
</form>
</div>
<div className="col-sm-4 ml-1  add-idea-card    mb-4 shadow  border bg-white">


                        <div className="header  d-flex mr-3 justify-content-between mb-3">
                        <img
                className="photo ml-4 mt-4"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"
              ></img>
                            <div className="doe card-top"><h5>John doe</h5><p>Mentor</p></div>
                        </div>

                        <p className="para-text mx-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's <content className="br"></content>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.<content className="br"></content>Some
              quick example text to build on the card title and make up the bulk
              of the card's content.
            </p>
            <h3 className="results mt-3 ml-4">89%</h3>
            <p className="comment text-muted ml-4">Performance</p>

            <div className="messages   ml-4">
              <div className="chat"></div>
              <div className="send">
                <p className="text-muted">Send Message</p>
              </div>
            </div>

            <div className="socials ml-4 mb-3">
              <div className="linkedin">
                <i class="fab text-muted icons fa-linkedin"></i>
              </div>
              <div className="twitter ml-2">
                <i class="fab text-muted icons fa-twitter"></i>
              </div>
            </div>
          


                    





</div>



</div>
                

                

                
            </div>
        )
    }
}


export default GroupContent;
