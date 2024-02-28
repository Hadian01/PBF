
interface CardProps {
    title: string;
    children: React.ReactNode;
  }
  
  export default function Card({ title, children }: CardProps) {
    return (
      <div style={{ 
        border: '1px solid #ccc', 
        borderRadius: '5px', 
        padding: '10px', 
        marginBottom: '20px' 
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{title}</div>
        <div>{children}</div>
      </div>
    );
  }