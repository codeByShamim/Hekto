import React from 'react';
import styles from './SingleBlogPage.module.css';
import RelatedProducts from './RelatedProducts';

const BlogContent = ({ post, products = [] }) => {
  return (
    <div className={styles.content}>
      {post.contentBlocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className={styles.paragraph}>
                {block.content}
              </p>
            );

          case "quote":
            return (
              <blockquote key={index} className={styles.quote}>
                {block.content}
              </blockquote>
            );

          case "relatedProducts":
            const relatedProducts = products.filter((product) =>
              block.products.includes(product.id)
            );

            // Check if related products are found and log them
            console.log('Related Products:', relatedProducts);

            return (
              <RelatedProducts
                key={index}
                products={relatedProducts}
              />
            );

          case "image":
            return (
              <div key={index} className={styles.imageBlock}>
                {block.src.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={block.alt || `Image ${imgIndex + 1}`}
                    className={styles.image}
                  />
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogContent;
