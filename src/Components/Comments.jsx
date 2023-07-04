export default function Comments({ comments }){
    if (comments.length==0) return <p>Seja o primeiro a comentar!</p>
    
    return(
      <div>
      {comments.map((comment)=>(
        <Comment key={comment.id} email={comment.userEmail} comment={comment.userComment} createAt={comment.creatAt}/>
      ))}
  
      </div>
    )
  }

function Comment({email, comment, createAt}){
    return(
        <div>
        <h3>{email}</h3>
        <p>{createAt}</p>
        <p>{comment}</p>
      
      </div>
    )
}