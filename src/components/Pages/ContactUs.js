import React from "react";

const Contact=()=>{

    return(
        <div class="container">
            <div className="py-4">
                <h2>Contact Page</h2>
                <form>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name"/>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput4" class="form-label">Email</label>
                        <input type="text" class="form-control" id="formGroupExampleInput4" placeholder="Email"/>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput3" class="form-label">Password</label>
                        <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Password"/>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput3" class="form-label">Confirm Password</label>
                        <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Confirm Password"/>
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;