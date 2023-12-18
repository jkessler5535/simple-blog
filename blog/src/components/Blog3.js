import React from 'react';
import HomeUp from './Home-Up.js';
import { Table } from "react-bootstrap";
import SleepChart from './SleepChart.js';

const Blog3 = () => {
  return (
  <div className="blog-content">
    
    <h1>Are you getting enough sleep?</h1>

    <p>The amount of sleep required varies depending on several factors, predominantly your age. Although sleep needs differ significantly among individuals, it is helpful to consider these general recommendations for different age groups:</p>
    
    <div className="table-responsive">
      <h2>Recommended Amount of Sleep by Age Group :</h2>

      <Table striped bordered>
        <thead>
          <tr>
            <th>Age Group</th>
            <th>Recommended Amount of Sleep</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Infants 4 months to 12 months</td>
            <td>12 to 16 hours per 24 hours, including naps</td>
          </tr>
          <tr>
            <td>1 to 2 years</td>
            <td>11 to 14 hours per 24 hours, including naps</td>
          </tr>
          <tr>
            <td>3 to 5 years</td>
            <td>10 to 13 hours per 24 hours, including naps</td>
          </tr>
          <tr>
            <td>6 to 12 years</td>
            <td>9 to 12 hours per 24 hours</td>
          </tr>
          <tr>
            <td>13 to 18 years</td>
            <td>8 to 10 hours per 24 hours</td>
          </tr>
          <tr>
            <td>Adults</td>
            <td>7 or more hours a night</td>
          </tr>
        </tbody>
      </Table>
    </div>

    <h2>Factors Affecting Sleep Duration</h2>

    <ul>
      <li>
        <strong>Sleep Quality:</strong>
        If your sleep is frequently interrupted, you're not getting quality sleep. The quality of your sleep is just as important as the quantity.
      </li>
      <li>
        <strong>Previous Sleep Deprivation:</strong>
        If you're sleep deprived, the amount of sleep you need increases.
      </li>
      <li>
        <strong>Pregnancy:</strong>
        Changes in hormone levels and physical discomfort can result in poor sleep quality.
      </li>
      <li>
        <strong>Aging:</strong>
        Older adults need about the same amount of sleep as younger adults. However, as you get older, your sleeping patterns might change. Older adults tend to sleep more lightly, take longer to start sleeping, and sleep for shorter time spans than do younger adults. They also tend to wake up multiple times during the night.
      </li>
    </ul>

    <h2>Benefits of Adequate Sleep for Children</h2>

    <p>For kids, getting the recommended amount of sleep on a regular basis is linked with better health, including:</p>
    <ul>
      <li>Improved attention</li>
      <li>Positive behavior</li>
      <li>Enhanced learning</li>
      <li>Improved memory retention</li>
      <li>Enhanced emotional control</li>
      <li>Better quality of life</li>
      <li>Enhanced mental and physical health</li>
    </ul>

    <h2>Effects of Inadequate Sleep for Adults</h2>

    <p>For adults, consistently getting less than seven hours of sleep a night on a regular basis has been linked with poor health, including:</p>
    <ul>
      <li>Weight gain</li>
      <li>Having a body mass index (BMI) of 30 or higher</li>
      <li>Increased risk of diabetes</li>
      <li>Higher blood pressure levels</li>
      <li>Risk of heart disease</li>
      <li>Increased likelihood of stroke</li>
      <li>Elevated risk of depression</li>
    </ul>
    <SleepChart/>
    <HomeUp/>
  </div>
  );
}

export default Blog3;