import Problems from './../problems/index';

async function createProblemList(){
    
    // const Problems = await require('./../problems');
    if(!Problems) return (<div>Nothing Found!</div>);

    window.console.log("xyz:: ", Problems);

    return Problems.map( (prob, i) => (
        <div key={i}>{prob.P_NAME}</div>
    ))

}

export default function ProblemsComponent({ children, params }) {
	return (
		<div>
			<p>Showing all problems in the directory</p>
			{createProblemList()}
		</div>
	);
}
