import React from "react";
import Layout from "../components/Layout";
import "../pages/Home.css";
import { ReactComponent as Cinema } from "../assets/icons/cinema.svg";
import { ReactComponent as Netflix } from "../assets/icons/netflix.svg";
import {Link} from 'react-router-dom';
function Home() {
  return (
    <Layout>
      <div class="container">
        <div class="row">
          <div class="col-6">
            O lista de filme este o modalitate inedită de a iti centraliza
            producțiile cinematografice favorite, iar prin intermediul acestei
            aplicatii voi face o selecție a celor mai bune filme pe care le-am
            vizionat de-a lungul timpului și pe care le rcomand cu mare căldură!
          </div>
          <div class="col-6">
            <Link to='movie'>
            <img src="https://i.imgur.com/LKhgS0Q.jpg" alt="" />
            
            </Link>
          </div>
        </div>
        <div class="row align-items-start">
          <div class="col-4">
            Pentru început, câteva cuvinte despre mine: Sunt un pasionat și
            dezvoltatro entuziast de tot ce înseamnă Javascript și React. În
            timpul liber imi place:
          </div>
          <div class="col-4">
            <ul>
              <li>Să călătoresc</li>
              <li>Să fac sport</li>
              <li>Să vizionez cât se poate filme și seriale de calitate</li>
            </ul>
          </div>
          <div class="col-4">
            În acest sens mi-am propus pe baza tehnologiilor pe care le știu
            să-m realizez propria aplicație de filme favorite.
          </div>
        </div>
        <h2>Locurile/platoformele cele mai potrivite pentru filme:</h2>
        <div class="row">
          <div class="col-6">
              Cinema:<Cinema  className='movies'/>
          </div>
          <div class="col-6">
              Platorme de streaming:<Netflix className='movies' />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
