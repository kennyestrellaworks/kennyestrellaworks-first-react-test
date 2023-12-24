import PersonContent from "./PersonContent";

export default function App() {
  return (
    <>
      <div className="wrap">
        <div className="wrap__screen">
          <div className="wrap__viewport">
            <div className="wrap__content">
              <div className="person">
                <div className="person__heading">
                  <h1 className="heading-style-1 heading-style-1__primary">
                    employee list
                  </h1>
                  <h4 className="heading-style-1 heading-style-1__secondary">
                    People From Team Webby
                  </h4>
                </div>
                <section className="person__content">
                  <PersonContent />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
