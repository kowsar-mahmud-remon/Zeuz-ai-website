import React from "react";
import Image from "next/image";
import Link from "next/link";

import Author from "public/img/blog/blog-author-1.png";

import One from "public/img/blog/1/blog-01.jpg";
import Two from "public/img/blog/1/blog-02.jpg";
import Three from "public/img/blog/1/blog-03.jpg";

const BlogOne = () => {
  return (
    <section className="blog__area grey-bg-3 pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__title-wrapper text-center mb-70">
              {/* <div className="section__subtitle-3">
                <span>BLOG POSTS</span>
              </div> */}
              <div className="section__title-3 mb-20">
                <h2 style={{ fontSize: 30, color: "#297C91" }}>
                  Read latest blog
                </h2>
              </div>
              <p>
                Softim keeps your team&apos;s work on-brand, on message, and on
                time Innovative.
              </p>
            </div>
          </div>
        </div>
        <div className="row " data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="blog__item-3 mb-30">
              <div className="blog__thumb-3 w-img">
                <Image src={One} alt="image not found" />
              </div>
              <div className="blog__content-3">
                <div className="blog__meta">
                  <div className="blog__meta-thumb">
                    <Image src={Author} alt="image not found" />
                  </div>
                  <div className="blog__meta-author">
                    <span>Aothor</span>
                    <span>24th March, 2023</span>
                  </div>
                </div>
                <h3>
                  <Link href="/blog">
                    New survey reveals test automation trends{" "}
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="blog__item-3 mb-30">
              <div className="blog__thumb-3 w-img">
                <Image src={Two} alt="image not found" />
              </div>
              <div className="blog__content-3">
                <div className="blog__meta">
                  <div className="blog__meta-thumb">
                    <Image src={Author} alt="image not found" />
                  </div>
                  <div className="blog__meta-author">
                    <span>Aothor</span>
                    <span>24th March, 2023</span>
                  </div>
                </div>
                <h3>
                  <Link href="/blog">Scriptless test automation </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="blog__item-3 mb-30">
              <div className="blog__thumb-3 w-img">
                <Image src={Three} alt="image not found" />
              </div>
              <div className="blog__content-3">
                <div className="blog__meta">
                  <div className="blog__meta-thumb">
                    <Image src={Author} alt="image not found" />
                  </div>
                  <div className="blog__meta-author">
                    <span>Aothor</span>
                    <span>24th March, 2023</span>
                  </div>
                </div>
                <h3>
                  <Link href="/blog">How do I approach agile testing? </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
