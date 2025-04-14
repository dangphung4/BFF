export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        
        <div className="grid gap-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Services for Men</h2>
            <div className="prose max-w-none">
              <p>
                Our premium shoe repair and maintenance services tailored specifically for men's footwear.
                From classic dress shoes to casual everyday options, we ensure your shoes maintain their
                appearance and performance for years to come.
              </p>
              <ul className="mt-4 space-y-2">
                <li>Complete shoe restoration</li>
                <li>Sole replacement and repair</li>
                <li>Heel replacement</li>
                <li>Leather conditioning and polishing</li>
                <li>Custom shoe adjustments for comfort</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Services for Women</h2>
            <div className="prose max-w-none">
              <p>
                Specialized repair services for women's footwear of all types. From heel repairs on 
                your favorite pumps to stretching boots for a perfect fit, our craftspeople can handle
                all your shoe repair needs with precision and care.
              </p>
              <ul className="mt-4 space-y-2">
                <li>Heel replacement and repair</li>
                <li>Sole protection and replacement</li>
                <li>Boot stretching and adjustments</li>
                <li>Shoe stretching for comfort</li>
                <li>Decorative element repair and replacement</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Industrial Stitching</h2>
            <div className="prose max-w-none">
              <p>
                Our industrial stitching services use professional-grade equipment to handle heavy-duty 
                repairs. Whether you need repairs on work boots, leather goods, or other heavy materials,
                our industrial stitching capabilities ensure strong, long-lasting results.
              </p>
              <ul className="mt-4 space-y-2">
                <li>Heavy-duty boot repairs</li>
                <li>Reinforced stitching for work wear</li>
                <li>Custom leather goods construction</li>
                <li>Canvas, denim, and upholstery repair</li>
                <li>Commercial and industrial applications</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Luggage Repair</h2>
            <div className="prose max-w-none">
              <p>
                From suitcases to backpacks, we can repair almost any luggage issue. Our experienced 
                technicians handle zipper replacements, wheel repairs, handle repairs, and structural 
                reinforcement to extend the life of your travel companions.
              </p>
              <ul className="mt-4 space-y-2">
                <li>Zipper replacement and repair</li>
                <li>Wheel and handle replacement</li>
                <li>Tear and hole patching</li>
                <li>Structural reinforcement</li>
                <li>Luggage maintenance services</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 