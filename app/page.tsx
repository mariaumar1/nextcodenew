import Link from "next/Link";

import Image from "next/Image";

import imagejpg from "../public/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const featurejobs = [
    {
      title: "Bilinggual Event Support Specialist",
      company: "Hexagone",
      location: "San Francisco",
      hours: "Full Time",
      time: "2 Day Ago",
    },

    {
      title: "Bilinggual Event Support Specialist",
      company: "Hexagone",
      location: "San Francisco",
      hours: "Full Time",
      time: "2 Day Ago",
    },
    {
      title: "Bilinggual Event Support Specialist",
      company: "Hexagone",
      location: "San Francisco",
      hours: "Full Time",
      time: "2 Day Ago",
    },
    {
      title: "Bilinggual Event Support Specialist",
      company: "Hexagone",
      location: "San Francisco",
      hours: "Full Time",
      time: "2 Day Ago",
    },
    {
      title: "Bilinggual Event Support Specialist",
      company: "Hexagone",
      location: "San Francisco",
      hours: "Full Time",
      time: "2 Day Ago",
    },
  ];
  return (
    <main>
      <div className="container container_wrap">
        <h1 className="text-3xl font-bold ">Featured Jobs</h1>
        <div className="featured_jobs">
          {featurejobs.map(
            ({ title, company, location, hours, time }, index) => (
              <div key={index} className="row_box">
                <div className="flex items-center">
                  <div className="w-10/12">
                    <div className="job_detail">
                      <div className="job_image">
                        <Link href="/profile" className="image_box_wrap">
                          <Image
                            src={imagejpg}
                            width="300px"
                            height="400px"
                            placeholder="blur"
                            alt=""
                          />
                        </Link>
                      </div>
                      <h2>{title}</h2>
                      <p>
                        <span>
                          <FontAwesomeIcon icon={faCity} />
                          {company}
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faLocationDot} />
                          {location}
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faHouse} />
                          {hours}
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faClock} />
                          {time}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="w-2/12 text-right">
                    <Link href="/profile" className="button_wrap">
                      <button className="rounded-full ...">Apply Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
