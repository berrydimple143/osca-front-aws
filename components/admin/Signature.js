import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SignaturePad from 'react-signature-canvas';
import styles from '../../styles/signature.module.css';
import { message } from 'antd';

class Signature extends Component {
  state = {trimmedDataURL: null}
  sigPad = {}
  setShowSignatureModal = null;
  selectedItemForSignature = null;
  setSaving = null;
  userSignature = null;

  constructor(props) {
    super(props);
    this.state = {trimmedDataURL: null};
    this.setShowSignatureModal = props.setShowSignatureModal;
    this.selectedItemForSignature = props.selectedItemForSignature;
    this.setSaving = props.setSaving;
    this.userSignature = props.userSignature;
  }

  close = () => {
    this.setShowSignatureModal(false);
  }

  clear = () => {
    this.sigPad.clear()
  }
  save = async () => {
    this.setShowSignatureModal(false);
    this.setSaving(true);
    const info = this.sigPad.getTrimmedCanvas().toDataURL('image/png');
    try {
        const { data } = await this.userSignature(this.selectedItemForSignature, info);
        this.setSaving(false);
    } catch (error) {
        this.setSaving(false);
        message.error("Something went wrong.");
    }
  }
  render () {
    let {trimmedDataURL} = this.state
    return <div className={styles.padContainer}>
      <div className="flex">
      <div className={styles.sigContainer}>
        <SignaturePad canvasProps={{className: styles.sigPad}}
          ref={(ref) => { this.sigPad = ref }} />
      </div>
      <div className="flex flex-col justify-between">
        <button className={styles.buttons} onClick={this.clear}>
          Clear
        </button>
        <button className={styles.buttons} onClick={this.save}>
          Save
        </button>
        <button className={styles.buttons} onClick={this.close}>
          Close
        </button>
      </div>
      {trimmedDataURL
        ? <img className={styles.sigImage}
          src={trimmedDataURL} />
        : null}
        </div>
    </div>
  }
}

export default Signature;
