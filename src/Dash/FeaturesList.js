/*illustrations and development approach component*/
export function FeaturesList({ data }) {
    return (
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">{data.title}</h6>
            </div>
            <div class="card-body">
                <div class="text-center">
                    {data.isimage ? <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="..." /> : null}
                </div>
                <p>{data.content}</p>
            </div>
        </div>
    );
}