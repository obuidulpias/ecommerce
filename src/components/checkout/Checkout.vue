<template>
<div>
    <top-header></top-header>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"> Registered Checkout </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Guest Checkout </a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row justify-content-center">
                                        <div class="col-md-12 col-sm-11">
                                            <div class="p-6 login bg-white">
                                                <h4 class="text-left mb-3 font-w-5 text-center"> Login</h4>
                                                <form id="contact-form" method="post" action="http://themesground.com/flipmarto/demo/html/php/contact.php">
                                                    <div class="messages"></div>
                                                    <div class="form-group">
                                                        <input id="form_name" type="text" name="name" class="form-control" placeholder="User name" required data-error="Username is required.">
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                    <div class="form-group">
                                                        <input id="form_password" type="password" name="password" class="form-control" placeholder="Password" required data-error="password is required.">
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                    <div class="form-group mt-4 mb-5">
                                                        <div class="remember-checkbox d-flex align-items-center justify-content-between">
                                                            <div class="checkbox">
                                                                <input type="checkbox" id="check2" name="check2">
                                                                <label for="check2">Remember me</label>
                                                            </div>
                                                            <a href="#">Forgot Password?</a>
                                                        </div>
                                                    </div> <a href="#" class="btn btn-primary btn-block">Login Now</a>
                                                </form>
                                                <div class="another_login"><span> or</span></div>
                                                <ul class="login-btn list_none text-center">
                                                    <li><a href="#" class="btn facebook-btn"><i class="ion-social-facebook"></i>Facebook</a></li>
                                                    <li><a href="#" class="btn google-btn"><i class="ion-social-googleplus"></i>Google</a></li>
                                                </ul>
                                                <div class="d-flex align-items-center text-center justify-content-center mt-4">
                                                    <span class="text-muted mr-1">Don't have an account?</span>
                                                    <a href="signup.html">Sign Up</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row justify-content-center text-center">
                                        <div class="col-md-12 p-6 bg-white">
                                            <div class="col-lg-12 col-md-12 p-0">
                                                <div class="mb-6">
                                                    <h4 class="font-w-6">New Account</h4>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 ml-auto mr-auto p-0">
                                                <div class="register-form text-center">
                                                    <form id="contact-form" method="post" action="http://themesground.com/flipmarto/demo/html/php/contact.php">
                                                        <div class="messages"></div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <input id="form_name" type="text" name="name" class="form-control" placeholder="First name" required data-error="Firstname is required.">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Last name" required data-error="Lastname is required.">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <input id="form_email" type="email" name="email" class="form-control" placeholder="Email" required data-error="Valid email is required.">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Phone" required data-error="Phone is required">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <input id="form_password" type="password" name="password" class="form-control" placeholder="Password" required data-error="password is required.">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <input id="form_password1" type="password" name="password" class="form-control" placeholder="Conform Password" required data-error="Conform Password is required.">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <select class="form-control">
                                                                        <option selected>Gender</option>
                                                                        <option value="male">Male</option>
                                                                        <option value="female">Female</option>
                                                                    </select>
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <select class="form-control">
                                                                        <option value="Country">Select Country...</option>
                                                                        <option value="AF">Afghanistan</option>
                                                                        <option value="AL">Albania</option>
                                                                        <option value="DZ">Algeria</option>
                                                                        <option value="AS">American Samoa</option>
                                                                        <option value="AD">Andorra</option>
                                                                        <option value="AG">Angola</option>
                                                                        <option value="AI">Anguilla</option>
                                                                        <option value="AG">Antigua &amp; Barbuda</option>
                                                                        <option value="AR">Argentina</option>
                                                                        <option value="AA">Armenia</option>
                                                                        <option value="AW">Aruba</option>
                                                                        <option value="AU">Australia</option>
                                                                        <option value="AT">Austria</option>
                                                                        <option value="AZ">Azerbaijan</option>
                                                                        <option value="BS">Bahamas</option>
                                                                        <option value="BH">Bahrain</option>
                                                                        <option value="BD">Bangladesh</option>
                                                                        <option value="BB">Barbados</option>
                                                                        <option value="BY">Belarus</option>
                                                                        <option value="BE">Belgium</option>
                                                                        <option value="BZ">Belize</option>
                                                                        <option value="BJ">Benin</option>
                                                                        <option value="BM">Bermuda</option>
                                                                        <option value="BT">Bhutan</option>
                                                                        <option value="BO">Bolivia</option>
                                                                        <option value="BL">Bonaire</option>
                                                                        <option value="BA">Bosnia &amp; Herzegovina</option>
                                                                        <option value="BW">Botswana</option>
                                                                        <option value="BR">Brazil</option>
                                                                        <option value="BC">British Indian Ocean Ter</option>
                                                                        <option value="BN">Brunei</option>
                                                                        <option value="BG">Bulgaria</option>
                                                                        <option value="BF">Burkina Faso</option>
                                                                        <option value="BI">Burundi</option>
                                                                        <option value="KH">Cambodia</option>
                                                                        <option value="CM">Cameroon</option>
                                                                        <option value="CA">Canada</option>
                                                                        <option value="IC">Canary Islands</option>
                                                                        <option value="CV">Cape Verde</option>
                                                                        <option value="KY">Cayman Islands</option>
                                                                        <option value="CF">Central African Republic</option>
                                                                        <option value="TD">Chad</option>
                                                                        <option value="CD">Channel Islands</option>
                                                                        <option value="CL">Chile</option>
                                                                        <option value="CN">China</option>
                                                                        <option value="CI">Christmas Island</option>
                                                                        <option value="CS">Cocos Island</option>
                                                                        <option value="CO">Colombia</option>
                                                                        <option value="CC">Comoros</option>
                                                                        <option value="CG">Congo</option>
                                                                        <option value="CK">Cook Islands</option>
                                                                        <option value="CR">Costa Rica</option>
                                                                        <option value="CT">Cote D'Ivoire</option>
                                                                        <option value="HR">Croatia</option>
                                                                        <option value="CU">Cuba</option>
                                                                        <option value="CB">Curacao</option>
                                                                        <option value="CY">Cyprus</option>
                                                                        <option value="CZ">Czech Republic</option>
                                                                        <option value="DK">Denmark</option>
                                                                        <option value="DJ">Djibouti</option>
                                                                        <option value="DM">Dominica</option>
                                                                        <option value="DO">Dominican Republic</option>
                                                                        <option value="TM">East Timor</option>
                                                                        <option value="EC">Ecuador</option>
                                                                        <option value="EG">Egypt</option>
                                                                        <option value="SV">El Salvador</option>
                                                                        <option value="GQ">Equatorial Guinea</option>
                                                                        <option value="ER">Eritrea</option>
                                                                        <option value="EE">Estonia</option>
                                                                        <option value="ET">Ethiopia</option>
                                                                        <option value="FA">Falkland Islands</option>
                                                                        <option value="FO">Faroe Islands</option>
                                                                        <option value="FJ">Fiji</option>
                                                                        <option value="FI">Finland</option>
                                                                        <option value="FR">France</option>
                                                                        <option value="GF">French Guiana</option>
                                                                        <option value="PF">French Polynesia</option>
                                                                        <option value="FS">French Southern Ter</option>
                                                                        <option value="GA">Gabon</option>
                                                                        <option value="GM">Gambia</option>
                                                                        <option value="GE">Georgia</option>
                                                                        <option value="DE">Germany</option>
                                                                        <option value="GH">Ghana</option>
                                                                        <option value="GI">Gibraltar</option>
                                                                        <option value="GB">Great Britain</option>
                                                                        <option value="GR">Greece</option>
                                                                        <option value="GL">Greenland</option>
                                                                        <option value="GD">Grenada</option>
                                                                        <option value="GP">Guadeloupe</option>
                                                                        <option value="GU">Guam</option>
                                                                        <option value="GT">Guatemala</option>
                                                                        <option value="GN">Guinea</option>
                                                                        <option value="GY">Guyana</option>
                                                                        <option value="HT">Haiti</option>
                                                                        <option value="HW">Hawaii</option>
                                                                        <option value="HN">Honduras</option>
                                                                        <option value="HK">Hong Kong</option>
                                                                        <option value="HU">Hungary</option>
                                                                        <option value="IS">Iceland</option>
                                                                        <option value="IN">India</option>
                                                                        <option value="ID">Indonesia</option>
                                                                        <option value="IA">Iran</option>
                                                                        <option value="IQ">Iraq</option>
                                                                        <option value="IR">Ireland</option>
                                                                        <option value="IM">Isle of Man</option>
                                                                        <option value="IL">Israel</option>
                                                                        <option value="IT">Italy</option>
                                                                        <option value="JM">Jamaica</option>
                                                                        <option value="JP">Japan</option>
                                                                        <option value="JO">Jordan</option>
                                                                        <option value="KZ">Kazakhstan</option>
                                                                        <option value="KE">Kenya</option>
                                                                        <option value="KI">Kiribati</option>
                                                                        <option value="NK">Korea North</option>
                                                                        <option value="KS">Korea South</option>
                                                                        <option value="KW">Kuwait</option>
                                                                        <option value="KG">Kyrgyzstan</option>
                                                                        <option value="LA">Laos</option>
                                                                        <option value="LV">Latvia</option>
                                                                        <option value="LB">Lebanon</option>
                                                                        <option value="LS">Lesotho</option>
                                                                        <option value="LR">Liberia</option>
                                                                        <option value="LY">Libya</option>
                                                                        <option value="LI">Liechtenstein</option>
                                                                        <option value="LT">Lithuania</option>
                                                                        <option value="LU">Luxembourg</option>
                                                                        <option value="MO">Macau</option>
                                                                        <option value="MK">Macedonia</option>
                                                                        <option value="MG">Madagascar</option>
                                                                        <option value="MY">Malaysia</option>
                                                                        <option value="MW">Malawi</option>
                                                                        <option value="MV">Maldives</option>
                                                                        <option value="ML">Mali</option>
                                                                        <option value="MT">Malta</option>
                                                                        <option value="MH">Marshall Islands</option>
                                                                        <option value="MQ">Martinique</option>
                                                                        <option value="MR">Mauritania</option>
                                                                        <option value="MU">Mauritius</option>
                                                                        <option value="ME">Mayotte</option>
                                                                        <option value="MX">Mexico</option>
                                                                        <option value="MI">Midway Islands</option>
                                                                        <option value="MD">Moldova</option>
                                                                        <option value="MC">Monaco</option>
                                                                        <option value="MN">Mongolia</option>
                                                                        <option value="MS">Montserrat</option>
                                                                        <option value="MA">Morocco</option>
                                                                        <option value="MZ">Mozambique</option>
                                                                        <option value="MM">Myanmar</option>
                                                                        <option value="NA">Nambia</option>
                                                                        <option value="NU">Nauru</option>
                                                                        <option value="NP">Nepal</option>
                                                                        <option value="AN">Netherland Antilles</option>
                                                                        <option value="NL">Netherlands (Holland, Europe)</option>
                                                                        <option value="NV">Nevis</option>
                                                                        <option value="NC">New Caledonia</option>
                                                                        <option value="NZ">New Zealand</option>
                                                                        <option value="NI">Nicaragua</option>
                                                                        <option value="NE">Niger</option>
                                                                        <option value="NG">Nigeria</option>
                                                                        <option value="NW">Niue</option>
                                                                        <option value="NF">Norfolk Island</option>
                                                                        <option value="NO">Norway</option>
                                                                        <option value="OM">Oman</option>
                                                                        <option value="PK">Pakistan</option>
                                                                        <option value="PW">Palau Island</option>
                                                                        <option value="PS">Palestine</option>
                                                                        <option value="PA">Panama</option>
                                                                        <option value="PG">Papua New Guinea</option>
                                                                        <option value="PY">Paraguay</option>
                                                                        <option value="PE">Peru</option>
                                                                        <option value="PH">Philippines</option>
                                                                        <option value="PO">Pitcairn Island</option>
                                                                        <option value="PL">Poland</option>
                                                                        <option value="PT">Portugal</option>
                                                                        <option value="PR">Puerto Rico</option>
                                                                        <option value="QA">Qatar</option>
                                                                        <option value="ME">Republic of Montenegro</option>
                                                                        <option value="RS">Republic of Serbia</option>
                                                                        <option value="RE">Reunion</option>
                                                                        <option value="RO">Romania</option>
                                                                        <option value="RU">Russia</option>
                                                                        <option value="RW">Rwanda</option>
                                                                        <option value="NT">St Barthelemy</option>
                                                                        <option value="EU">St Eustatius</option>
                                                                        <option value="HE">St Helena</option>
                                                                        <option value="KN">St Kitts-Nevis</option>
                                                                        <option value="LC">St Lucia</option>
                                                                        <option value="MB">St Maarten</option>
                                                                        <option value="PM">St Pierre &amp; Miquelon</option>
                                                                        <option value="VC">St Vincent &amp; Grenadines</option>
                                                                        <option value="SP">Saipan</option>
                                                                        <option value="SO">Samoa</option>
                                                                        <option value="AS">Samoa American</option>
                                                                        <option value="SM">San Marino</option>
                                                                        <option value="ST">Sao Tome &amp; Principe</option>
                                                                        <option value="SA">Saudi Arabia</option>
                                                                        <option value="SN">Senegal</option>
                                                                        <option value="RS">Serbia</option>
                                                                        <option value="SC">Seychelles</option>
                                                                        <option value="SL">Sierra Leone</option>
                                                                        <option value="SG">Singapore</option>
                                                                        <option value="SK">Slovakia</option>
                                                                        <option value="SI">Slovenia</option>
                                                                        <option value="SB">Solomon Islands</option>
                                                                        <option value="OI">Somalia</option>
                                                                        <option value="ZA">South Africa</option>
                                                                        <option value="ES">Spain</option>
                                                                        <option value="LK">Sri Lanka</option>
                                                                        <option value="SD">Sudan</option>
                                                                        <option value="SR">Suriname</option>
                                                                        <option value="SZ">Swaziland</option>
                                                                        <option value="SE">Sweden</option>
                                                                        <option value="CH">Switzerland</option>
                                                                        <option value="SY">Syria</option>
                                                                        <option value="TA">Tahiti</option>
                                                                        <option value="TW">Taiwan</option>
                                                                        <option value="TJ">Tajikistan</option>
                                                                        <option value="TZ">Tanzania</option>
                                                                        <option value="TH">Thailand</option>
                                                                        <option value="TG">Togo</option>
                                                                        <option value="TK">Tokelau</option>
                                                                        <option value="TO">Tonga</option>
                                                                        <option value="TT">Trinidad &amp; Tobago</option>
                                                                        <option value="TN">Tunisia</option>
                                                                        <option value="TR">Turkey</option>
                                                                        <option value="TU">Turkmenistan</option>
                                                                        <option value="TC">Turks &amp; Caicos Is</option>
                                                                        <option value="TV">Tuvalu</option>
                                                                        <option value="UG">Uganda</option>
                                                                        <option value="UA">Ukraine</option>
                                                                        <option value="AE">United Arab Emirates</option>
                                                                        <option value="GB">United Kingdom</option>
                                                                        <option value="US">United States of America</option>
                                                                        <option value="UY">Uruguay</option>
                                                                        <option value="UZ">Uzbekistan</option>
                                                                        <option value="VU">Vanuatu</option>
                                                                        <option value="VS">Vatican City State</option>
                                                                        <option value="VE">Venezuela</option>
                                                                        <option value="VN">Vietnam</option>
                                                                        <option value="VB">Virgin Islands (Brit)</option>
                                                                        <option value="VA">Virgin Islands (USA)</option>
                                                                        <option value="WK">Wake Island</option>
                                                                        <option value="WF">Wallis &amp; Futana Is</option>
                                                                        <option value="YE">Yemen</option>
                                                                        <option value="ZR">Zaire</option>
                                                                        <option value="ZM">Zambia</option>
                                                                        <option value="ZW">Zimbabwe</option>
                                                                    </select>
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-5">
                                                            <div class="col-md-12">
                                                                <div class="remember-checkbox clearfix mb-5">
                                                                    <div class="custom-control custom-checkbox">
                                                                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                                        <label class="custom-control-label" for="customCheck1">I agree to the term of use and privacy policy</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <a href="#" class="btn btn-primary">Create Account</a>
                                                                <span class="mt-4 d-block">Have An Account ? <a href="login.html">Sign In!</a></span>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <section class="checkout-page">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-7 col-md-12">
                                            <div class="checkout-form box-shadow white-bg">
                                                <h4 class="mb-4 font-w-6">Billing Details</h4>
                                                <form class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label>First Name</label>
                                                            <input type="text" id="fname" class="form-control" placeholder="Your firstname">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label>Last Name</label>
                                                            <input type="text" id="lname" class="form-control" placeholder="Your lastname">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label>E-mail Address</label>
                                                            <input type="text" id="email" class="form-control" placeholder="State Province">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label>Phone Number</label>
                                                            <input type="text" id="phone" class="form-control" placeholder="">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label>Company Name</label>
                                                            <input type="text" id="companyname" class="form-control" placeholder="Company Name">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label>Select Country</label>
                                                            <select name="people" id="people" class="form-control">
                                                                <option value="#">Select country</option>
                                                                <option value="#">Alaska</option>
                                                                <option value="#">China</option>
                                                                <option value="#">Japan</option>
                                                                <option value="#">Korea</option>
                                                                <option value="#">Philippines</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label>Address</label>
                                                            <input type="text" id="address" class="form-control" placeholder="Enter Your Address">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" id="address2" class="form-control" placeholder="Second Address">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label>Town/City</label>
                                                            <input type="text" id="towncity" class="form-control" placeholder="Town or City">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group mb-md-0">
                                                            <label>State/Province</label>
                                                            <input type="text" id="statename" class="form-control" placeholder="State Province">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group mb-md-0">
                                                            <label>Zip/Postal Code</label>
                                                            <input type="text" id="zippostalcode" class="form-control" placeholder="Zip / Postal">
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-md-12 mt-5 mt-lg-0">
                                            <div class="border bg-light-4 p-3 p-lg-5">
                                                <div class="mb-7">
                                                    <label class="text-black mb-3">Enter your coupon code if you have one</label>
                                                    <div class="input-group">
                                                        <input class="form-control" id="c-code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" type="text">
                                                        <div class="input-group-append">
                                                            <button class="btn btn-primary btn-sm px-4" type="button" id="button-addon2">Apply</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-7">
                                                    <h6 class="mb-3 font-w-6">Your Order</h6>
                                                    <ul class="list-unstyled">
                                                        <li class="mb-3 border-bottom pb-3 d-flex"><span class="mr-auto"> 1 x Unpaired Running Shoes </span> <span>$1348.00</span></li>
                                                        <li class="mb-3 border-bottom pb-3 d-flex"><span class="mr-auto"> 1 x Unpaired Running Shoes </span> <span>$952.00</span></li>
                                                        <li class="mb-3 border-bottom pb-3 d-flex"><span class="mr-auto"> Shipping </span> <span>$99.00</span></li>
                                                        <li class="mb-3 border-bottom pb-3 d-flex"><span class="mr-auto"> Subtotal </span> <span>$2399.00</span></li>
                                                        <li class="d-flex"><span class="mr-auto"><strong class="cart-total"> Total :</strong></span> <strong class="cart-total">$2399.00 </strong>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="cart-detail my-5">
                                                    <h6 class="mb-3 font-w-6">Payment Method</h6>
                                                    <div class="form-group">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                                                            <label class="custom-control-label" for="customRadio1">Direct Bank Tranfer</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                                                            <label class="custom-control-label" for="customRadio2">Check Payment</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                                                            <label class="custom-control-label" for="customRadio3">Paypal Account</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group mb-0">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                            <label class="custom-control-label" for="customCheck1">I have read and accept the terms and conditions</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button class="btn btn-primary btn-animated btn-block">Proceed to Payment</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import TopHeader from '../includes/TopHeader.vue'
export default {
    components: {
        'top-header': TopHeader,
    }
}
</script>

<style scoped>

</style>
