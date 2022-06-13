import { Link } from "react-router-dom";

import Button from "../Button/Button";

import "./Recent.scss";



import FavoritesFirst from "../../Assets/Images/RecentFirst.jpg";
import FavoritesSecond from "../../Assets/Images/RecentSecound.jpg";
import FavoritesThird from "../../Assets/Images/FavoritesThird.jpg";



const recentArticles  = () => {
  return (
    <section className="workshops">
      <div className="container">
        <div className="workshops__info">
          <h2 className="workshops__heading">Recent Articles</h2>

          <p className="workshops__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse varius enim in eros elementum tristique. 
            Duis cursus, mi quis viverra ornare, eros dolor 
            interdum nulla, ut commodo diam libero vitae erat.
          </p>

          <Button className={"recent__button"}>View All Workshops</Button>
        </div>

        <ul className="recent__list">
          <li className="recent__item">
            <img
              className="recent__item__image"
              src={FavoritesFirst}
              alt=""
              width={393}
              height={197}
            />

            <div className="recent__item__info">
              <p className="recent__data">
              February 8, 2021
              </p>

              <h3 className="recent__item__heading">
                The TikTok Algorithm: How to Get the Best Engagement
              </h3>
              
              <p className="recent__item__paragraph">Dianne Russell</p>
             
            </div>
          </li>

          <li className="recent__item">
            <img
              className="recent__item__image"
              src={FavoritesSecond}
              alt=""
              width={393}
              height={197}
            />

            <div className="recent__item__info">
            <p className="recent__data">
              February 8, 2021
              </p>

              <h3 className="recent__item__heading">
                How to Win Friends and Influence People
              </h3>
              
              <p className="recent__item__paragraph">Marvin McKinney</p>
             

            </div>
          </li>

          <li className="recent__item">
            <img
              className="recent__item__image"
              src={FavoritesThird}
              alt=""
              width={393}
              height={197}
            />

            <div className="recent__item__info">
            <p className="recent__data">January 31, 2021</p>

              <h3 className="recent__item__heading">
                iPhone Photography: Tips, Tricks, and Best Practices
              </h3>
              
              <p className="recent__item__paragraph">Katie Murphy</p>
             
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default recentArticles;
