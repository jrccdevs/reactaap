import React from "react";
import Paginate from "react-paginate";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const nulo = () => <div>No hay elementos para mostrar</div>;

class Paginator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: props.currentPage,
            itemsPerPage: props.itemsPerPage
        };
    }

    handlePageChange = ({ selected }) => {
        this.setState({ currentPage: selected + 1 });
    };

    render() {
        const { items, renderItem } = this.props;
        const { currentPage, itemsPerPage } = this.state;

        

        const startIndex = (currentPage - 1) * itemsPerPage;
        const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);


        // Calcula la última página
        const lastPage = Math.ceil(items.length / itemsPerPage);

        return (
            <div>
                {visibleItems.length > 0
                    ? visibleItems.map(item => renderItem(item))
                    : nulo()}
                <br />
                {items.length > itemsPerPage && (
                    <Paginate
                        pageCount={items.length / itemsPerPage}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={2}
                        onPageChange={this.handlePageChange}
                        containerClassName="pagination"
                        activeClassName="active"
                        firstPageText="First"
                        lastPageText="Last"
                        breakLabel="..."
                        // nextLabel={<FaChevronRight />}
                        // previousLabel={<FaChevronLeft />}
                        nextLabel={currentPage === lastPage ? null : <FaChevronRight />}
                        previousLabel={currentPage === 1 ? null : <FaChevronLeft />}
                        renderOnZeroPageCount={nulo}
                    />)}
            </div>
        );
    }
}

export default Paginator;