import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Tag from '../components/ui/Tag';
import { portfolioData } from '../data/portfolioData';
import { MdVerifiedUser } from 'react-icons/md';
import './FeaturedProject.css';

const FeaturedProject = () => {
  const { featuredProject } = portfolioData;

  return (
    <section id="work" className="featured-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="featured-header">
            <SectionHeading title={featuredProject.title} subtitle="Case Study" />
          </div>

          <div className="featured-card">
            <div className="featured-grid">
              <div className="featured-visual">
                {/* Visual placeholder */}
                <div className="featured-placeholder-bg"></div>
              </div>
              <div className="featured-content">
                <div className="featured-block">
                  <span className="featured-label">The Context</span>
                  <p>{featuredProject.context}</p>
                </div>
                
                <div className="featured-block">
                  <span className="featured-label">The Architecture</span>
                  <div className="featured-tags">
                    {featuredProject.techStack.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>

                <div className="featured-block">
                  <span className="featured-label">The Highlights</span>
                  <ul>
                    {featuredProject.highlights.map((h, i) => (
                      <li key={i} className="featured-highlight">
                        <span className="skill-dot"></span>{h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="featured-verified">
                  <MdVerifiedUser className="featured-verified-icon" />
                  <span>Verified Backend & Deployment implementation</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedProject;
