import { useState, useEffect } from "react";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { motion } from "motion/react";
import { BookOpen, ExternalLink, Loader2 } from "lucide-react";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
}

export function Writing() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@justinecodez"
        );
        const data = await response.json();
        if (data.items) {
          // Limit to 6 posts to match previous structure
          setPosts(data.items.slice(0, 6));
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Section 
      id="writing" 
      label="// THINKING IN PUBLIC" 
      title="Writing about technology, business, AI, fintech, and Africa."
      className="bg-brand-surface/30 border-y border-brand-border"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-5">
          <p className="text-brand-text-muted text-lg leading-relaxed mb-8">
            I write to document what I am learning, building, and observing across software architecture, fintech, AI, cybersecurity, African innovation, business development, and career growth.
          </p>
          <Button 
            asAnchor 
            href="https://justinecodez.medium.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="secondary" 
            className="group"
          >
            Read My Articles
            <ExternalLink size={14} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
        
        <div className="lg:col-span-7">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="animate-spin text-brand-gold" size={24} />
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {posts.map((post, index) => (
                <motion.a 
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-sm bg-brand-surface-alt border border-brand-border hover:border-brand-gold transition-colors group h-full"
                >
                  <div className="mt-1">
                    <BookOpen size={16} className="text-brand-text-muted group-hover:text-brand-gold transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-text group-hover:text-brand-gold transition-colors line-clamp-3">
                      {post.title}
                    </span>
                    <span className="text-[9px] font-mono text-brand-text-muted">
                      {new Date(post.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </motion.a>
              ))}
              
              {posts.length === 0 && !loading && (
                <div className="col-span-2 p-8 border border-dashed border-brand-border text-center rounded-sm">
                  <p className="text-sm text-brand-text-muted">No recent articles found. Visit Medium for more.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
