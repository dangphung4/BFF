export default function ProductsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        
        <div className="grid gap-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Leather Care Products</h2>
            <div className="prose max-w-none">
              <p>
                Keep your leather goods looking their best with our premium leather care products. 
                We offer a comprehensive range of cleaners, conditioners, polishes, and waterproofing 
                treatments suitable for all types of leather.
              </p>
              <ul className="mt-4 space-y-2">
                <li>Leather cleaners and soaps</li>
                <li>Leather conditioners and oils</li>
                <li>Premium shoe polishes</li>
                <li>Waterproofing sprays and waxes</li>
                <li>Complete leather care kits</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Comfort Aids</h2>
            <div className="prose max-w-none">
              <p>
                Enhance the comfort of your footwear with our selection of insoles, cushions, and other 
                comfort-enhancing products. Whether you need arch support, heel cushioning, or help with 
                sizing adjustments, we have solutions for every comfort need.
              </p>
              <ul className="mt-4 space-y-2">
                <li>Custom and pre-made orthotic insoles</li>
                <li>Heel cushions and lifts</li>
                <li>Ball-of-foot pads</li>
                <li>Shoe stretchers and stretching solutions</li>
                <li>Anti-slip grips and sole protectors</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Custom Leather Goods</h2>
            <div className="prose max-w-none">
              <p>
                Our craftspeople create beautiful, functional leather goods made to your specifications. 
                From wallets and belts to custom bags and accessories, we use premium leather and expert 
                techniques to bring your vision to life.
              </p>
              <ul className="mt-4 space-y-2">
                <li>Custom wallets and card holders</li>
                <li>Personalized belts</li>
                <li>Bespoke leather bags</li>
                <li>Custom leather accessories</li>
                <li>Leather repairs and modifications</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 