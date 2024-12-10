import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../components/modal/modal.component";
import Photo from "../../components/photo/photo.component";
import "./home-page-styles.css";

const HomePage = () => {
  const [photoList, setPhotoList] = useState();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isMaxPage, setIsMaxPage] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const _onChangeInput = (searchValue) => {
    setSearchQuery(searchValue);
  };

  const _onSubmit = (e) => {
    setPageNumber(1);
    setIsSearching(true);
    searchPhoto(1, searchQuery);
    if (searchQuery === "") {
      getPhotoList(1);
    } else {
      searchPhoto(1, searchQuery);
    }
  };

  const _onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setPageNumber(1);
      setIsSearching(true);
      if (searchQuery === "") {
        getPhotoList(1);
      } else {
        searchPhoto(1, searchQuery);
      }
    }
  };

  const searchPhoto = async (page, search) => {
    try {
      setIsLoading(true);
      const url = `https://flickr-gallery-be-production.up.railway.app/images?&currentPage=${page}&tags=${search}`;
      const result = await axios.get(url);
      setPhotoList(result.data);
      if (result.data.meta.totalData === 0) {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }
      if (result.data.meta.currentPage === result.data.meta.totalPage) {
        setIsMaxPage(true);
      } else {
        setIsMaxPage(false);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const getPhotoList = async (page) => {
    try {
      setIsLoading(true);
      const url = `https://flickr-gallery-be-production.up.railway.app/images?&currentPage=${page}`;
      const result = await axios.get(url);
      setPhotoList(result.data);
      if (result.data.meta.currentPage === result.data.meta.totalPage) {
        setIsMaxPage(true);
      } else {
        setIsMaxPage(false);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    getPhotoList(pageNumber);
  }, []);

  const handleNext = () => {
    const nextPage = pageNumber + 1;
    setPageNumber(nextPage);
    if (isSearching) {
      searchPhoto(nextPage, searchQuery);
    } else {
      getPhotoList(nextPage);
    }
  };

  const handlePrevious = () => {
    const backPage = pageNumber - 1;
    setPageNumber(backPage);
    if (isSearching) {
      searchPhoto(backPage, searchQuery);
    } else {
      getPhotoList(backPage);
    }
  };

  const _onClick = (photo) => () => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const _onCloseModal = () => {
    setShowModal(false);
  };

  const _renderPosterModal = () => {
    if (showModal) {
      return (
        <Modal showModal={showModal} onCloseModal={_onCloseModal}>
          <img className="poster-img" src={selectedPhoto} alt="media" />
        </Modal>
      );
    }
    return null;
  };

  return (
    <>
      <div className="form-search">
        <div className="form-group">
          <input
            autoComplete="off"
            id="searchPhoto"
            type="text"
            placeholder="Search images.."
            onKeyDown={(event) => _onKeyDown(event)}
            onChange={(event) => _onChangeInput(event.target.value)}
          />
          <button className="btn-primary" onClick={(event) => _onSubmit(event)}>
            <span className="submit-text">Search</span>
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="text">Loading....</div>
      ) : isEmpty ? (
        <p className="text">Photo not found..</p>
      ) : (
        <div className="photo-grid white">
          {photoList?.data.map((photo, index) => {
            return <Photo key={index} post={photo} onClick={_onClick} />;
          })}
        </div>
      )}
      <div className="action">
        {pageNumber !== 1 && !isLoading && (
          <button onClick={handlePrevious} className="f-left">
            Previous
          </button>
        )}

        {!isMaxPage && !isLoading && (
          <button onClick={handleNext} className="f-right">
            Next
          </button>
        )}
      </div>

      {_renderPosterModal()}
    </>
  );
};

export default HomePage;
