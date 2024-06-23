import React from "react";
import { Container } from "react-bootstrap";
import './PortfolioSecStyles.css'
import { Link } from 'react-router-dom';
import 'animate.css';

const PortfolioSec = () => {
   
    return (
        <div name="work" className='portfolio'>
            <Container>

                
                <h1 className="work-title"> My Recent Work</h1>
                <p className="work-text">Here are a few projects I've worked on. Interested in seeing more? Feel free to <a href="mailto:pateagar@gmail.com"> email </a> me.</p>
                <div className="project-gird">
                    <div className="colmn project-colmn">
                        <div className="project-wrap">
                            <div className="project-inner">
                                <img className="project-img" src="https://previews.dropbox.com/p/thumb/ACTEJGknmvcUNaI3-gMCEa99CRFtt57w_ccTkAe7dxlFhGGAs6ESVvWccpXwf57IvsjYf43pRLJnGC0kDFBlQNhriiLjv2T_OofQZVAxitbuePGp0tU4L2ErBmhc_3TpdEQ7slEcYV8ItN1IkzbGNCjvBoExB-LuB_HsiIALHSMFvFkc8dyvgFx9-rtbJE0YEOKMGN5u3BaNqY1fc-D0hfxnQzm8-HPvWqE6wusqXhSPR1GkN7TST-Mmc2KsoHMhM2fq_NvrCHAyQ9GfJBSEaqeG2DynNTyyz__wQcLpdURsl5GCrUFoJBunFzkIqMOgSoGCAXBDen29EntFgtq9tVZm/p.jpeg" alt="Vans Skateclassics Page" />
                                <div className="portfolio-bg"></div>
                                <div className="label-text">
                                    <h4 className="title-category">Vans Skate Classics</h4>
                                    <p className="text-category">HTML / CSS / jQuery / Design</p>
                                </div>
                                <Link to='/xo' className="cta-btn">  View  </Link>
                            </div>
                        </div>
                        <div className="project-wrap">
                            <div className="project-inner">
                                <img className="project-img" src="https://previews.dropbox.com/p/thumb/ACSHn4hM9BX5-1_zHxcrkPVv_DDBR2vmOzYJnova6p9yF2y9pdhKXWn_Nx1utVwbaV4Gf1xmlSSWCbXe4DwdBV34H52jt7k_n-499oZi-h30UW7CqPZNJ8G-MMoz1i-UJrkMRQ1gYhy70N615haSG-PVTZB4w9XnIZ_pEu-OvHza8lTcXLa6cvh5JaGua2vVtT1HgCAfKDhFzQkZ59KgOUZeAzf-xe_YhriF3EDcC8EMRN5UDiLHJsrjiJRWuBEH8Z5uDOexTNjIsYyui4X6JnTcHcWfNsSQXsRS1O6utcoYXpIqDgaesE_iKLBjs0lDXc-CB5NqNLOy5lbb-9d0PXK5/p.jpeg" alt="Vans EXO Range Page" />
                                <div className="portfolio-bg"></div>
                                <div className="label-text">
                                    <h4 className="title-category">The UltraRange EXO</h4>
                                    <p className="text-category">Pug / SCSS / Typescript</p>
                                </div>
                                <Link to='/xo' className="cta-btn">  View  </Link>
                            </div>
                        </div>
                        <div className="project-wrap">
                            <div className="project-inner">
                                <img className="project-img" src="https://previews.dropbox.com/p/thumb/ACThkTL2WtpxBvmVw2YqWl7gJdEdJDJle6XI5FZZWUyn_F4B2Epw5iVHVp8LTQqqzEfxxK5KGDLi5hqX124tVkOdq6taLo8Zquyr3NyDRl8Mvc2OyA_phKlZ4hiORH_WhaAxeuei1ZIuzl3zRyQ4N-J0q0W_HVzeVO15h2g2VcvgZNIsIq2qTVDQWSuyTQCVz2JL8bZ6tpZsx7iLv_7I-3tT6klMnowTyR-rTWK0WjT1pHFm7-g1lK4BqqPpj00cuHeJtcYy2fZHF2CIu5y1TCk2IoAQ4-Y2zDZecnm4ImSHIy54MRJirlzGFzzKO2LBYV9M_8Zbh5FpAP92HJ0bJXc-/p.jpeg" alt="Vans Skate Page" />
                                <div className="portfolio-bg"></div>
                                <div className="label-text">
                                    <h4 className="title-category">Vans Skate Page</h4>
                                    <p className="text-category">Pug / SCSS / Typescript</p>
                                </div>
                                <Link to='https://www.vans.com/en-us/skateboarding' className="cta-btn">  View  </Link>
                            </div>
                        </div>
                        <div className="project-wrap">
                            <div className="project-inner">
                                <img className="project-img" src="https://previews.dropbox.com/p/thumb/ACTt-JBmhHpvhaswJWZC-M4x-3BoB3fdjew-WWa1PXhNdiUrzPO_TOyvLKJMVN5hwLJNRB8ZTLmwhr1mx7_bVebOy4RLlGhNrQylWLq8FB16659oR7y2lr1vTWEwT-gUj-aEF1q4uSM5F6xalwPwArmwzZ8r8mKj9W7aQyGzzSYh4OgnKElnkLIubzAVDZFoAd-qIT1sQEkzS3muXDyGMAx5v6NGjJUnacMdcH-9mNIh3OEnL71XOpiXEBOprS3rDbdkZQT5mVQmUDZayKYEQE21G-PlAWwqmC5Ao8tGI88dw9WHRo48NX3uU7iS2fR2XMvBZecj5JeVKECU3JtSFa_C/p.jpeg" alt="Make Your Own" />
                                <div className="portfolio-bg"></div>
                                <div className="label-text">
                                    <h4 className="title-category">Make Your Own</h4>
                                    <p className="text-category">Pug / SCSS / Typescript</p>
                                </div>
                                <Link to='/skate' className="cta-btn">  View  </Link>
                            </div>
                        </div>
                        <div className="project-wrap">
                            <div className="project-inner">
                                <img className="project-img" src="https://previews.dropbox.com/p/thumb/ACQQtduZV5RdbexXFMu2m6jv2dreB5GFMSIGJTcnoHKirofhpUUMZD6T0exWq46ld_R6BYhKMMUCuwKtDI1qXI017vtAu_q5CEOhlM_j_2l4C_IRhKvCXznkCzG8McyNkP50MU8XUTU_RPKwhyn1w2qKJA32koNN4X942UgHpyaBnKPq0Segddn8rCWX0WG-AfC2tEVD752TdCxSiJblvK-b7SgXPzNqWhuL26L-AlhvAcQUtxAoLmwLl6bM4pHpP5fICCJO0Xb4mh1iaNotxVHTyp0MFMx2DzaWNHSc9rta1ugnp3qxPXHkn73V14AZvQ5DBohOfJenDrFoWGXQpBa4/p.jpeg" alt="Vans Wax Records Page" />
                                <div className="portfolio-bg"></div>
                                <div className="label-text">
                                    <h4 className="title-category">Vans Family</h4>
                                    <p className="text-category">Pug / SCSS / Typescript</p>
                                </div>
                                <Link to='https://www.vans.com/en-us/family' className="cta-btn">  View  </Link>
                            </div>
                        </div>
                        <div className="project-wrap">
                            <div className="project-inner">
                                <img className="project-img" src="https://previews.dropbox.com/p/thumb/ACQeEAnDHJ21zagAsobmomOysDjN9To_nZ8QGHgNJEyS3jkw7NzuBhkfiy8Dx1YhsB9-8MZinQ1nCvMn2GSL0QiGGeqtUYenCysrJjErk5KFxSvNBiDJnetwAIexQQU0WH4p2fgDCgnuRV5qDg0d6Hn3SjnmfjvR_0t9bdgShMOGmQ8UDnozLJ9LgfNDDsZYKrviJrJ00c6HiQXtieoxRnqEAHR_wRrznhvRQu7RkJfz4OseqvbMoN6iv56r5KH4Zw29udTXvBb74itJwpnEa1b8_OysTUt8v2DkdzbDWn2GL6zyX7FfpN3E1_-nasZA3ggOgJ_i8brhUv4CTr-5ep39/p.jpeg" alt="Vans Teams Page" />
                                <div className="portfolio-bg"></div>
                                <div className="label-text">
                                    <h4 className="title-category">Vans Team Page</h4>
                                    <p className="text-category">Pug / SCSS / Typescript</p>
                                </div>
                                <Link to='https://www.vans.com/en-us/team' className="cta-btn">  View  </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PortfolioSec