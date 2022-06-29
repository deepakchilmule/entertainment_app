import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';

function Modal(props) {

  const { data, closeModal } = props
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div style={{  backgroundColor:'pink' }}>
      <div class="modal" style={{ display: 'block', top: '150px', }} role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"> {data.original_name || data.original_title} </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => {
                closeModal(false)
              }} >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p> {data.overview} </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft:'20px', paddingBottom:'20px' }}>
              <img src={`${base_url}${data.poster_path}`} style={{ height: '150px', width: '250px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Modal