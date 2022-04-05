import PropTypes from "prop-types";

const Qute = ({ data }) => {
    return (
        <div className="slider-content-area" data-aos="fade-up">
            <h2 dangerouslySetInnerHTML={{ __html: data.qute }}></h2><p class="nice">Collecting art is proven to increase longevity</p>
        </div>
    );
};

Qute.propTypes = {
    data: PropTypes.object,
};

export default Qute;
