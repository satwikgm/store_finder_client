const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
    },
    header: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    subHeader: {
      fontSize: '20px',
      marginBottom: '15px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px',
    },
    gridItem: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    storeName: {
      marginBottom: '10px',
      fontSize: '18px',
      fontWeight: 'bold',
    },
    storeImage: {
      width: '100%',
      height: '150px',
      backgroundColor: '#ddd',
    },
    link: {
      color: '#007BFF',
      textDecoration: 'none',
    },
    linkHover: {
      textDecoration: 'underline',
    },
  };
  
  export default styles;
  