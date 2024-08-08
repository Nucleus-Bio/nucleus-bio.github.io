import { MyButton } from "@/components/ui/mybutton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      <main className="p-6 flex-grow">
        <section className="my-12">
          <Card>
            <CardHeader>
              <CardTitle>About the Software</CardTitle>
              <CardDescription>
                This software leverages the power of large language models to provide advanced bioinformatics analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mt-4 text-lg">
                Our software integrates cutting-edge machine learning algorithms to analyze biological data with unprecedented accuracy and speed.
              </p>
            </CardContent>
          </Card>
        </section>
        <section className="my-12">
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside mt-4 text-lg">
                <li>High-throughput data processing</li>
                <li>Real-time data visualization</li>
                <li>Customizable analysis pipelines</li>
                <li>Seamless integration with existing tools</li>
              </ul>
            </CardContent>
          </Card>
        </section>
        <section className="my-12">
          <Card>
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mt-4 text-lg">
                Follow the instructions to install and use the software. Our comprehensive documentation and user-friendly interface make it easy to get started.
              </p>
            </CardContent>
            <CardFooter>
              <MyButton>Learn More</MyButton>
            </CardFooter>
          </Card>
        </section>
        <section className="my-12">
          <Card>
            <CardHeader>
              <CardTitle>Testimonials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mt-4 text-lg">
                "This software has revolutionized our research. The insights we gain are invaluable." - Dr. Jane Doe
              </p>
              <p className="mt-4 text-lg">
                "A game-changer in bioinformatics. Highly recommend to any research lab." - Dr. John Smith
              </p>
            </CardContent>
          </Card>
        </section>
        <section className="my-12">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mt-4 text-lg">
                Have questions? Reach out to our support team at support@bioinformatics.com.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}