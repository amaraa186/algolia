import React from 'react';
import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits, Highlight, RefinementList, Pagination, Configure } from 'react-instantsearch-dom';
import './Search.css'

const searchClient = algoliasearch("KQGO2FBATK", "acc45d47d0defca128929b966740ab5f")


function Search() {

    return (
        < InstantSearch searchClient={searchClient} indexName="test" >
            <Header />
            <div className="body-content">
                <Content/>
            </div>
        </InstantSearch >
    );        
};
const Header = () => (
    <header className="header">
        <SearchBox
            className="search-bar"
            translations={{ placeholder: 'Search for Movies' }}
        />
    </header>
);
const Hit = ({ hit }) => (
    <a href={"/"} >
        <div className="card">
             <div className="card-contents">                
                <Highlight attribute="title" hit={hit} className="card-title" />
                <Highlight attribute="description" hit={hit}  className="card-year"/>
                <div className="card-genre"> <span>{hit.tags[0].title}</span></div>
            </div>
        </div>
    </a>
);
const Content = () => (
    <main>
        <div className="left-panel">
                <h2>Brands</h2>
                <RefinementList attribute="brand" />
            <Configure hitsPerPage={9} />
          </div>
        <Hits hitComponent={Hit} />
        <div> <Pagination/></div>
    </main>
);
export default Search;