import './post.css';

export default function post({ html }) {
  return (
    <div>
      <div className='p-4' dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
