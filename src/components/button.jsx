export const Button = ({ text }) => {
    return (
      <button
        style={{
          backgroundColor: '#dd0035',
          cursor: 'pointer',
          color: '#ffffff',
          border: '1px solid #dd00359e',
          padding: '10px 18px',
          fontWeight: '500',
          fontSize: '16px',
          borderRadius: '8px',
          boxShadow: '0px 1px 2px #b3b4b4',
        }}
      >
        {text}
      </button>
    );
  };