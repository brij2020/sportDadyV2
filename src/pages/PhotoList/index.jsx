import * as React from 'react'
import "./photoList.css"
import LOGO from "../../assets/logo/logo-trans.png";
import PageHeading from '../../Components/pageHead'
import PGT_CRICK from '../../assets/images/indvsA.jpg';
import SECOND_PICK from '../../assets/images/web-saec.jpg';
import THIRD_PICK from '../../assets/images/1_c.jpeg';
import FOURTH_PICK from '../../assets/images/ind.jpg';
import FIVE_PICK from '../../assets/images/hind.jpg';




const PhotoListPage = (props) => {

    return (<>
        <section class="pgt-container">

            <section class="mainContainer">
                
                <div class="breadcrumbs">
                <a href="/">Home</a>
                <span>/</span>
                Web Stories

            </div> 

                <section id="dataHolder" class="main-webstories">
                    {/* <div class="secHdg">
                        <span class="hdgTexure"></span>
                        <div class="hdgStyle">
                            <span>[</span>
                            <h1>Web Stories</h1>
                            <span>]</span>
                        </div>
                    </div> */}
                    <PageHeading heading="Web Stories" />
                    <div class="web-stories">
                        <ul>
                            <li>
                                <div class="webstories-item">
                                    <a href="/gallery"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','1', 'https://www.hindustantimes.com/web-stories/nikki-tamboli-in-embellished-outfits-_NP13hJ8J0Jj6MbiPD_j');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src={PGT_CRICK}
                                            alt="nikki tamboli in embellished outfits"
                                            title="nikki tamboli in embellished outfits" />
                                        <div class="gradient">
                                            <h3>Nikki Tamboli In Embellished Outfits</h3>
                                            <div class="time">Feb 24, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/best-online-fps-games-for-android-_NOmelvd3yBvnmzz2M22"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','2', 'https://www.hindustantimes.com/web-stories/best-online-fps-games-for-android-_NOmelvd3yBvnmzz2M22');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src={SECOND_PICK}
                                            alt="best online fps games for android"
                                            title="best online fps games for android" />
                                        <div class="gradient">
                                            <h3>Best Online FPS Games For Android</h3>
                                            <div class="time">Feb 24, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/quick-ways-to-get-rid-of-whiteheads-_NOrl_tio1SGIZV3XBf3"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','3', 'https://www.hindustantimes.com/web-stories/quick-ways-to-get-rid-of-whiteheads-_NOrl_tio1SGIZV3XBf3');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src={ THIRD_PICK }
                                            alt="quick ways to get rid of whiteheads"
                                            title="quick ways to get rid of whiteheads" />
                                        <div class="gradient">
                                            <h3>Quick Ways To Get Rid Of Whiteheads</h3>
                                            <div class="time">Feb 24, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/janhvi-to-shanaya-celeb-inspired-blue-outfits-_NP0SzAmNA1OsYdQcNCF"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','4', 'https://www.hindustantimes.com/web-stories/janhvi-to-shanaya-celeb-inspired-blue-outfits-_NP0SzAmNA1OsYdQcNCF');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src={FOURTH_PICK}
                                            alt="janhvi to shanaya celeb-inspired blue outfits"
                                            title="janhvi to shanaya celeb-inspired blue outfits" />
                                        <div class="gradient">
                                            <h3>Janhvi To Shanaya: Celeb-Inspired Blue Outfits</h3>
                                            <div class="time">Feb 24, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/8-travel-destinations-for-spring-lovers-_NOxZzKqQqbtWA3pl9vb"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','5', 'https://www.hindustantimes.com/web-stories/8-travel-destinations-for-spring-lovers-_NOxZzKqQqbtWA3pl9vb');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src={FIVE_PICK}
                                            alt="8 travel destinations for spring lovers"
                                            title="8 travel destinations for spring lovers" />
                                        <div class="gradient">
                                            <h3>8 Travel Destinations For Spring Lovers</h3>
                                            <div class="time">Feb 24, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/janhvi-kapoor-in-manish-malhotra-outfits-_NOytnO92ApfxiVAbXlq"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','6', 'https://www.hindustantimes.com/web-stories/janhvi-kapoor-in-manish-malhotra-outfits-_NOytnO92ApfxiVAbXlq');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/24/4_3/9_16_2/janhvi_kapoor_in_manish_malhotra_outfits_1677218361.jpg"
                                            alt="janhvi kapoor in manish malhotra outfits"
                                            title="janhvi kapoor in manish malhotra outfits" />
                                        <div class="gradient">
                                            <h3>Janhvi Kapoor In Manish Malhotra Outfits</h3>
                                            <div class="time">Feb 24, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/krishna-mukherjees-bachelorette-party-_NP0H_8nkBrXGzM6lRb1"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','7', 'https://www.hindustantimes.com/web-stories/krishna-mukherjees-bachelorette-party-_NP0H_8nkBrXGzM6lRb1');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/24/4_3/9_16_2/krishna_mukherjee_s_bachelorette_party_1677214961.jpg"
                                            alt="krishna mukherjee s bachelorette party"
                                            title="krishna mukherjee s bachelorette party" />
                                        <div class="gradient">
                                            <h3>Krishna Mukherjee's Bachelorette Party</h3>
                                            <div class="time">Feb 24, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/tripti-dimris-most-stylish-looks-_NOyBvgc_nLw7E508m_P"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','8', 'https://www.hindustantimes.com/web-stories/tripti-dimris-most-stylish-looks-_NOyBvgc_nLw7E508m_P');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/23/4_3/9_16_2/tripti_dimri_s_most_stylish_looks_1677157739.jpg"
                                            alt="tripti dimri s most stylish looks"
                                            title="tripti dimri s most stylish looks" />
                                        <div class="gradient">
                                            <h3>Tripti Dimri's Most Stylish Looks</h3>
                                            <div class="time">Feb 23, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/disha-patani-in-chic-bodycon-dresses-_NOxFQ2NoXeMxoj00eYR"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','9', 'https://www.hindustantimes.com/web-stories/disha-patani-in-chic-bodycon-dresses-_NOxFQ2NoXeMxoj00eYR');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/23/4_3/9_16_2/disha_patani_in_chic_bodycon_dresses_1677150097.jpg"
                                            alt="disha patani in chic bodycon dresses"
                                            title="disha patani in chic bodycon dresses" />
                                        <div class="gradient">
                                            <h3>Disha Patani In Chic Bodycon Dresses</h3>
                                            <div class="time">Feb 23, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/maanvi-gagroos-dreamy-wedding-pics-_NOxdXRRzy5L1mdMCwRn"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','10', 'https://www.hindustantimes.com/web-stories/maanvi-gagroos-dreamy-wedding-pics-_NOxdXRRzy5L1mdMCwRn');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/23/4_3/9_16_2/maanvi_gagroo_s_dreamy_wedding_pics_1677147278.jpg"
                                            alt="maanvi gagroo s dreamy wedding pics"
                                            title="maanvi gagroo s dreamy wedding pics" />
                                        <div class="gradient">
                                            <h3>Maanvi Gagroo's Dreamy Wedding Pics</h3>
                                            <div class="time">Feb 23, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/how-to-get-a-lean-body-_NOwoEVeLgBO_WZgYr5U"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','11', 'https://www.hindustantimes.com/web-stories/how-to-get-a-lean-body-_NOwoEVeLgBO_WZgYr5U');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/23/4_3/9_16_2/how_to_get_a_lean_body_1677144420.jpg"
                                            alt="how to get a lean body" title="how to get a lean body" />
                                        <div class="gradient">
                                            <h3>How To Get A Lean Body</h3>
                                            <div class="time">Feb 23, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/esha-guptas-love-for-black-outfits-_NOw_Am8rPRtkj7UIrMh"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','12', 'https://www.hindustantimes.com/web-stories/esha-guptas-love-for-black-outfits-_NOw_Am8rPRtkj7UIrMh');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/23/4_3/9_16_2/esha_gupta_s_love_for_black_outfits_1677141843.jpg"
                                            alt="esha gupta s love for black outfits"
                                            title="esha gupta s love for black outfits" />
                                        <div class="gradient">
                                            <h3>Esha Gupta's Love For Black Outfits</h3>
                                            <div class="time">Feb 23, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/5-exercises-to-build-wing-muscles-_NOwYLEr3XBmwm3NKsW4"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','13', 'https://www.hindustantimes.com/web-stories/5-exercises-to-build-wing-muscles-_NOwYLEr3XBmwm3NKsW4');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/23/4_3/9_16_2/5_exercises_to_build_wing_muscles_1677139282.jpg"
                                            alt="5 exercises to build wing muscles"
                                            title="5 exercises to build wing muscles" />
                                        <div class="gradient">
                                            <h3>5 Exercises To Build Wing Muscles</h3>
                                            <div class="time">Feb 23, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/akshay-kumar-makes-record-for-clicking-most-selfies-_NOwh_XpPkuI249UF9yH"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','14', 'https://www.hindustantimes.com/web-stories/akshay-kumar-makes-record-for-clicking-most-selfies-_NOwh_XpPkuI249UF9yH');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/23/4_3/9_16_2/akshay_kumar_makes_record_for_clicking_most_selfies_1677137095.jpg"
                                            alt="akshay kumar makes record for clicking most selfies"
                                            title="akshay kumar makes record for clicking most selfies" />
                                        <div class="gradient">
                                            <h3>Akshay Kumar Makes Record For Clicking Most Selfies</h3>
                                            <div class="time">Feb 23, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/mindfulness-practices-to-stay-calm-_NOrkv5ZAQoNSHKjIh4b"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','15', 'https://www.hindustantimes.com/web-stories/mindfulness-practices-to-stay-calm-_NOrkv5ZAQoNSHKjIh4b');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/23/4_3/9_16_2/mindfulness_practices_to_stay_calm_1677131717.jpg"
                                            alt="mindfulness practices to stay calm"
                                            title="mindfulness practices to stay calm" />
                                        <div class="gradient">
                                            <h3>Mindfulness Practices To Stay Calm</h3>
                                            <div class="time">Feb 23, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/5-health-benefits-of-flaxseed-milk-_NOsdNfesXInCor7Wwfw"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','16', 'https://www.hindustantimes.com/web-stories/5-health-benefits-of-flaxseed-milk-_NOsdNfesXInCor7Wwfw');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/23/4_3/9_16_2/5_health_benefits_of_flaxseed_milk_1677129179.jpg"
                                            alt="5 health benefits of flaxseed milk"
                                            title="5 health benefits of flaxseed milk" />
                                        <div class="gradient">
                                            <h3>5 Health Benefits Of Flaxseed Milk</h3>
                                            <div class="time">Feb 23, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/aditi-rao-hydari-in-stylish-outfits-_NOw8Er9TcZ_tX6PXz2t"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','17', 'https://www.hindustantimes.com/web-stories/aditi-rao-hydari-in-stylish-outfits-_NOw8Er9TcZ_tX6PXz2t');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/23/4_3/9_16_2/aditi_rao_hydari_in_stylish_outfits_1677126722.jpg"
                                            alt="aditi rao hydari in stylish outfits"
                                            title="aditi rao hydari in stylish outfits" />
                                        <div class="gradient">
                                            <h3>Aditi Rao Hydari In Stylish Outfits</h3>
                                            <div class="time">Feb 23, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/kiara-advanis-birthday-post-for-her-mother-_NOvt9ktk6x7pOUke9kp"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','18', 'https://www.hindustantimes.com/web-stories/kiara-advanis-birthday-post-for-her-mother-_NOvt9ktk6x7pOUke9kp');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/23/4_3/9_16_2/kiara_advani_s_birthday_post_for_her_mother_1677122880.jpg"
                                            alt="kiara advani s birthday post for her mother"
                                            title="kiara advani s birthday post for her mother" />
                                        <div class="gradient">
                                            <h3>Kiara Advani's Birthday Post For Her Mother</h3>
                                            <div class="time">Feb 23, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/huma-qureshi-in-glam-outfits-_NOsTuv47jWa9dEa8pLy"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','19', 'https://www.hindustantimes.com/web-stories/huma-qureshi-in-glam-outfits-_NOsTuv47jWa9dEa8pLy');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/22/4_3/9_16_2/huma_qureshi_in_glam_outfits_1677070832.jpg"
                                            alt="huma qureshi in glam outfits" title="huma qureshi in glam outfits" />
                                        <div class="gradient">
                                            <h3>Huma Qureshi In Glam Outfits</h3>
                                            <div class="time">Feb 22, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/6-ways-to-earn-money-online-_NOsAq7hhnG419e6X1eO"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','20', 'https://www.hindustantimes.com/web-stories/6-ways-to-earn-money-online-_NOsAq7hhnG419e6X1eO');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/22/4_3/9_16_2/6_ways_to_earn_money_online_1677067693.jpg"
                                            alt="6 ways to earn money online" title="6 ways to earn money online" />
                                        <div class="gradient">
                                            <h3>6 Ways To Earn Money Online</h3>
                                            <div class="time">Feb 22, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/superfoods-that-regulate-ph-levels-_NOrxl3__KtppL7ZPSSo"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','21', 'https://www.hindustantimes.com/web-stories/superfoods-that-regulate-ph-levels-_NOrxl3__KtppL7ZPSSo');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/22/4_3/9_16_2/superfoods_that_regulate_ph_levels_1677065220.jpg"
                                            alt="superfoods that regulate ph levels"
                                            title="superfoods that regulate ph levels" />
                                        <div class="gradient">
                                            <h3>Superfoods That Regulate PH Levels</h3>
                                            <div class="time">Feb 22, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/nora-fatehis-latest-stylish-looks-_NOr_Hw6mXGcp_GUor5J"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','22', 'https://www.hindustantimes.com/web-stories/nora-fatehis-latest-stylish-looks-_NOr_Hw6mXGcp_GUor5J');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/22/4_3/9_16_2/nora_fatehi_s_latest_stylish_looks_1677062508.jpg"
                                            alt="nora fatehi s latest stylish looks"
                                            title="nora fatehi s latest stylish looks" />
                                        <div class="gradient">
                                            <h3>Nora Fatehi's Latest Stylish Looks</h3>
                                            <div class="time">Feb 22, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/how-to-travel-without-a-tour-guide-_NOrUjhH5rDIp4m8a_EO"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','23', 'https://www.hindustantimes.com/web-stories/how-to-travel-without-a-tour-guide-_NOrUjhH5rDIp4m8a_EO');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/22/4_3/9_16_2/how_to_travel_without_a_tour_guide_1677058694.jpg"
                                            alt="how to travel without a tour guide"
                                            title="how to travel without a tour guide" />
                                        <div class="gradient">
                                            <h3>How To Travel Without A Tour Guide</h3>
                                            <div class="time">Feb 22, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/uorfi-javed-in-chic-white-pantsuit-_NOrqeMSPAjWuJp17EGs"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','24', 'https://www.hindustantimes.com/web-stories/uorfi-javed-in-chic-white-pantsuit-_NOrqeMSPAjWuJp17EGs');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/22/4_3/9_16_2/uorfi_javed_in_chic_white_pantsuit_1677056257.jpg"
                                            alt="uorfi javed in chic white pantsuit"
                                            title="uorfi javed in chic white pantsuit" />
                                        <div class="gradient">
                                            <h3>Uorfi Javed In Chic White Pantsuit</h3>
                                            <div class="time">Feb 22, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/exercises-to-improve-your-posture-_NOrkpP7HlmV_lZ8Kzws"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','25', 'https://www.hindustantimes.com/web-stories/exercises-to-improve-your-posture-_NOrkpP7HlmV_lZ8Kzws');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/22/4_3/9_16_2/exercises_to_improve_your_posture_1677052611.jpeg"
                                            alt="exercises to improve your posture"
                                            title="exercises to improve your posture" />
                                        <div class="gradient">
                                            <h3>Exercises To Improve Your Posture</h3>
                                            <div class="time">Feb 22, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="webstories-item">
                                    <a href="https://www.hindustantimes.com/web-stories/hardik-and-natasas-sangeet-ceremony-pics-_NOrsSxEVhOUEPbHCCTJ"
                                        onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','26', 'https://www.hindustantimes.com/web-stories/hardik-and-natasas-sangeet-ceremony-pics-_NOrsSxEVhOUEPbHCCTJ');">
                                        <div class="iconofwebstoires">
                                            <span class="webstories-icon"></span>
                                        </div>
                                        <img src="https://images1.livehindustan.com/uploadimage/library/2023/02/22/4_3/9_16_2/hardik_and_natasa_s_sangeet_ceremony_pics_1677051431.jpg"
                                            alt="hardik and natasa s sangeet ceremony pics"
                                            title="hardik and natasa s sangeet ceremony pics" />
                                        <div class="gradient">
                                            <h3>Hardik And Natasa's Sangeet Ceremony Pics</h3>
                                            <div class="time">Feb 22, 2023</div>
                                            <img class="logo-img" src={LOGO}
                                                alt="hindustan times" title="hindustan times" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </section>
        <section class="blackOverlay"></section>

    </>
    )
}

export default PhotoListPage;