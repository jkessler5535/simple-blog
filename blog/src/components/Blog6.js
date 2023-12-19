import React from "react";
import HomeUp from './Home-Up.js';
import GraphChart from './AloeGraph.js';

function Blog6() {
  return (
    <div className="blog-content">
      <h1>Aloe in Health Care</h1>
      <p>
        Aloe, a plant, produces two substances used in health care products — clear gel and yellow latex.
      </p>
      <p>
        People primarily use aloe's clear gel topically in creams and ointments to treat burns, the skin condition psoriasis, and even acne.
        Some also take the gel orally to treat certain conditions.
      </p>
      <p>
        Aloe latex, a laxative, has been taken orally to treat constipation.
      </p>
      <p>
        While aloe gel is generally safe when used as recommended, oral use of aloe latex poses safety concerns.
        In fact, taking 1 gram a day of aloe latex for several days can cause kidney damage and might be fatal.
      </p>

      <h2>What the research says</h2>
      <p>
        Research on the use of aloe for specific conditions shows:
      </p>
      <ul>
        <li>
          Burns and wounds: Application of aloe gel appears to shorten the duration of wound healing for first- and second-degree burns. Aloe gel might also promote wound healing.
        </li>
        <li>
          Acne: Research suggests that aloe gel, applied in the morning and evening in addition to the use of the topical prescription acne medicine tretinoin (Retin-A, Atralin, others), might be more effective in reducing acne than using a topical prescription alone.
        </li>
        <li>
          Psoriasis: Aloe extract cream might reduce redness, scaling, itching, and inflammation caused by mild to moderate psoriasis. You might need to use the cream several times a day for a month or more to see improvements in your skin.
        </li>
        <li>
          Oral lichen planus: Research suggests that twice-daily application of aloe gel for eight weeks might help reduce symptoms of this inflammatory condition that affects the inside of the mouth.
        </li>
        <li>
          Constipation: Whether oral use of aloe latex is effective at treating constipation is unclear. While it acts as a laxative, aloe latex can also cause abdominal cramps and diarrhea.
        </li>
      </ul>
      <h2>Our take</h2>
      <p><strong>Green light: Generally safe</strong></p>
      <p>Aloe gel is generally safe and can be effective in treating skin conditions such as burns and psoriasis.</p>
      <p>However, avoid using aloe latex orally. Unprocessed aloe latex contains chemicals that appear to have the potential to cause cancer, and processed aloe latex might have cancer-causing compounds. Taking 1 gram a day of aloe latex for several days can cause kidney damage and might be fatal.</p>

      <p><strong>Safety and side effects</strong></p>
      <p>Aloe gel is generally considered safe when appropriately applied to the skin. It might be safe when appropriate doses are taken orally for a short time.</p>
      <p>Aloe latex or whole-leaf extract taken orally might be unsafe and is likely unsafe in high doses. Taking 1 gram a day of aloe latex for several days can cause acute kidney failure and can be fatal. Aloe latex might also have the potential to cause cancer. Other side effects include abdominal cramps and diarrhea. Oral use of aloe latex and whole-leaf extract isn't recommended for children younger than age 12.</p>
      <GraphChart/>

      <h2>Possible interactions include:</h2>
      <ul>
          <li>
              <strong>Anticoagulants and anti-platelet drugs, herbs, and supplements:</strong>
              <p>These types of drugs, herbs, and supplements reduce blood clotting. Oral use of aloe might also slow blood clotting. Taking aloe orally with either of these types of medications might lead to increased bleeding.</p>
          </li>
          <li>
              <strong>Digoxin (Lanoxin):</strong>
              <p>Oral use of aloe latex can decrease potassium levels. Low potassium might increase the side effects of digoxin. Don't take aloe latex and digoxin together.</p>
          </li>
          <li>
              <strong>Diabetes drugs:</strong>
              <p>Oral use of aloe gel, when taken in combination with diabetes drugs, might increase the risk of a condition characterized by an abnormally low level of blood sugar (hypoglycemia).</p>
          </li>
          <li>
              <strong>Oral drugs:</strong>
              <p>Oral use of aloe latex can decrease your body's absorption of other drugs. This might reduce their effectiveness.</p>
          </li>
          <li>
              <strong>Sevoflurane (Ultane):</strong>
              <p>This anesthesia used during surgery might slow blood clotting. Oral use of aloe might have a similar effect. When used in combination, excessive bleeding during surgery is possible.</p>
          </li>
          <li>
              <strong>Stimulant laxatives:</strong>
              <p>Oral use of aloe latex with stimulant laxatives might overstimulate your bowels. This can lead to dehydration.</p>
          </li>
          <li>
              <strong>Warfarin (Coumadin, Jantoven):</strong>
              <p>Oral use of aloe latex can cause diarrhea. This can increase the effects of warfarin, a blood-thinning drug, and the risk of bleeding.</p>
          </li>
          <li>
              <strong>Water pills (diuretics):</strong>
              <p>Oral use of aloe latex, a laxative, in combination with use of diuretics might decrease potassium levels too much. Potassium supplementation might be needed.</p>
          </li>
      </ul>
      <HomeUp/>
    </div>
  );
}

export default Blog6;