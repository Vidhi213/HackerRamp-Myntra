import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Recommendation.css";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/recommendations"
        ); // Replace with your backend URL
        setRecommendations(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();
  }, []);

  const recommendationsData = [
    {
      itemID: 1,
      link: "https://www.myntra.com/26550050",
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26550050/2023/12/20/66b53dea-7a80-42ba-b96f-1eb3a67a390b1703086136821KazoWomenGreyScarf1.jpg",
      tags: "accesory,black,party",
    },
    {
      itemID: 2,
      link: "https://www.myntra.com/21544812",
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21544812/2023/1/14/13d720ac-e048-4f03-b5f0-35a091bf9a801673670483639Boots6.jpg",
      tags: "accesory,black,party",
    },
    {
      itemID: 3,
      link: "https://www.myntra.com/21013042",
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21013042/2022/12/3/f5580086-cd6b-4295-819a-f887f4438ac31670053094729SweatersMANGOWomenSweatersMANGOWomenSweatersMANGOWomenSweats1.jpg",
      tags: "western,black,party,monotone",
    },
    {
      itemID: 4,
      link: "https://www.myntra.com/24803896",
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24803896/2023/9/28/6e3083b2-4638-47c1-9ab6-b5f50d0e383a1695898845704BoohooCut-OutStraplessBodyconMidiDress1.jpg",
      tags: "western,green,party,monotone",
    },
    {
      itemID: 5,
      link: "https://www.myntra.com/22953090",
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22953090/2023/4/29/8bb71871-ee72-4fd8-b26a-e3a1964996261682757901125StrongAndBraveWomenBrownShorts1.jpg",
      tags: "western,brown,casual,monotone",
    },
    {
      itemID: 6,
      link: "https://www.myntra.com/25319922",
      imageUrl:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25319922/2023/10/27/cf36807a-8b2b-4f90-953b-642f4aedc3981698401390264-Boohoo-Off-Shoulder-Lace-Detail-Crochet-Style-Bandeau-Top-65-1.jpg",
      tags: "western,black,party,monotone",
    },
    {
        itemID: 7,
        link: "https://www.myntra.com/22775502",
        image:
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29383072/2024/5/6/dab75ea5-0547-43d8-aa6e-e7b4ec3a22ab1715000155032AthenaOff-ShoulderFlutterSleeveLayeredA-LineDress1.jpg",
        tags: "western,blue,party,monotone",
      },
      {
        itemID: 8,
        link: "https://www.myntra.com/26511668",
        image:
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/eometricStripedFlaredSleevesSequinnedGeorget1.jpghttps://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26511668/2023/12/19/9b8c02ae-e61b-41aa-8a25-6ef76f8f2fdf1702967833247KALINIWomenCream-ColouredFloralEmbroideredRegularSequinnedKu1.jpg",
        tags: "western,yellow,party,printed",
      },
      {
        itemID: 12,
        link: "https://www.myntra.com/25738536",
        image:
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22775502/2023/4/14/ff6587a9-d1bd-4932-893f-8edd879a00bc1681464312569KurtaSets2.jpg",
        tags: "ethnic,pink,casual,printed,colorful",
      },
    {
      itemID: 9,
      link: "https://www.myntra.com/25589312",
      imageUrl:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25589312/2023/10/21/5f16ab9a-e391-40a9-b1d7-10ffcc92185a1697910465278TokyoTalkiesPurpleFitFlareDress1.jpg",
      tags: "western,pink,casual,monotone",
    },
    {
      itemID: 10,
      link: "https://www.myntra.com/28560404",
      imageUrl:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28560404/2024/3/28/e50f8724-be07-4d0c-ba08-1c6253a4a4681711641788138Dresses1.jpg",
      tags: "western,gold,party,monotone",
    },
    {
      itemID: 11,
      link: "https://www.myntra.com/29584230",
      imageUrl:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29584230/2024/5/16/86305179-d455-432b-a9a5-a815151adf7e1715838664299RAREColourblockedTubeCropTop1.jpg",
      tags: "western,black,casual,monotone",
    },
    {
      itemID: 13,
      link: "https://www.myntra.com/24597958",
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24597958/2023/8/23/3e065699-c334-48f6-89f9-9d67c34496601692779031823JanasyaWomenYellowFloralPrintedRegularGottaPattiKurtawithSha1.jpg",
      tags: "ethnic, yellow, party, printed, monotone",
    },
    {
      itemID: 14,
      link: "https://www.myntra.com/24478586",
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24478586/2024/5/14/8a011dd2-794e-4193-9105-7a8e5a4a140f1715688554331-Libas-Floral-Embroidered-Pleated-Gotta-Patti--Kurti-with-Sha-11.jpg",
      tags: "ethnic, burgundy, party, monotone",
    },
    {
      itemID: 15,
      link: "https://www.myntra.com/27525434",
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27525434/2024/2/10/36932b85-4dec-413f-9723-a07cf5a021171707569751344KAVINDIWomensFauxGeorgetteFabricEmbroideredaliyastyleKurtaSe6.jpg",
      tags: "ethnic, blue, party, monotone",
    },
    {
      itemID: 16,
      link: "https://www.myntra.com/28533122",
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28533122/2024/3/27/2df04a9f-df65-4a46-9cea-b363319332c71711533503741PinkColorZariSequinnsEmbroideredAliaCutFlaredKurtaSet1.jpg",
      tags: "ethnic, pink, party, monotone",
    },
    {
      itemID: 17,
      link: "https://www.myntra.com/26511668",
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26511668/2023/12/19/9b8c02ae-e61b-41aa-8a25-6ef76f8f2fdf1702967833247KALINIWomenCream-ColouredFloralEmbroideredRegularSequinnedKu1.jpg",
      tags: "ethnic, red, white, party, colorful",
    },
    {
      itemID: 18,
      link: "https://www.myntra.com/24896724",
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/kBlendZariSequenceEmbroideryTopWithPalazzoAn2.jpg",
      tags: "ethnic, purple, traditional, kurta",
    },
    {
      itemID: 19,
      link: "https://www.myntra.com/22775502",
      imageUrl:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22775502/2023/4/14/ff6587a9-d1bd-4932-893f-8edd879a00bc1681464312569KurtaSets2.jpg",
      tags: "ethnic, magenta, traditional, kurta",
    },
    {
      itemID: 20,
      link: "https://www.myntra.com/22089222",
      imageUrl:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/c-4c53-baad-b95d7a5751c41677086874983Dresses3.jpg",
      tags: "western, black, party, halter neck",
    },
    {
      itemID: 21,
      link: "https://www.myntra.com/22089238",
      imageUrl:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/3-42b4-9f54-2dc236c609741677086865114Dresses3.jpg",
      tags: "western, grey, party, halter neck",
    },
    {
      itemID: 22,
      link: "https://www.myntra.com/27531610",
      imageUrl:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/263351633a3f1707796332041STREET9NetMaxiDress1.jpg",
      tags: "western, green, maxi, party",
    },
    // Add more items here as per your inventory data
  ];

  return (
    <div className="recommendations-container">
      <h2>Recommendations</h2>
      <div className="grid-container">
        {recommendations.map((recommendation) => {
          const matchedItem = recommendationsData.find(
            (item) => item.itemID === recommendation.itemID
          );
          if (matchedItem) {
            return (
              <div key={recommendation._id} className="recommendation-card">
                <a href={matchedItem.link} target="_blank" rel="noopener noreferrer">
                <img
                    src={matchedItem.image || matchedItem.imageUrl}
                    alt={`Item ${recommendation.itemID}`}
                    className="card-image"
                  />
                </a>
                <p>Item ID: {recommendation.itemID}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
export default Recommendations;