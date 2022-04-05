export const EmailFooter = () => {
    return (
      <>
        <div
          style={{
            fontSize: '14px',
            color: '#828282',
            marginTop: 32,
          }}
        >
          <p>
            Sent with <span style={{ color: '#dd0035' }}>&#10084;</span> from
            Tamborin.
            <br />
            Tamborin Inc.
            Nigeria.
          </p>
        </div>
  
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <a href="https://twitter.com/tamborin" style={{ marginRight: 8 }}>
              <img
                src="https://sesemailassets.s3.eu-central-1.amazonaws.com/twittericon.png"
                alt="twitter-icon"
              />
            </a>
            <a href="/" style={{ marginRight: 8 }}>
              <img
                src="https://sesemailassets.s3.eu-central-1.amazonaws.com/facebookicon.png"
                alt="facebook-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/tamborin"
              style={{ marginRight: 8 }}
            >
              <img
                src="https://sesemailassets.s3.eu-central-1.amazonaws.com/instagramicon.png"
                alt="instagram-icon"
              />
            </a>
          </div>
        </div>
      </>
    );
  };