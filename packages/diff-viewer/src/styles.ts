import styled from 'styled-components';

export const DiffWrapper = styled.div`
  border-radius: 4px 4px 0 0;
  //border: 1px solid #ccd3db;

  .d2h-wrapper {
    text-align: left;
  }

  .d2h-file-header {
    display: none;
  }

  .d2h-file-header.d2h-sticky-header {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .d2h-file-stats {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    margin-left: auto;
  }

  .d2h-lines-added {
    border: 1px solid #b4e2b4;
    border-radius: 5px 0 0 5px;
    color: #399839;
    padding: 2px;
    text-align: right;
    vertical-align: middle;
  }

  .d2h-lines-deleted {
    border: 1px solid #e9aeae;
    border-radius: 0 5px 5px 0;
    color: #c33;
    margin-left: 1px;
    padding: 2px;
    text-align: left;
    vertical-align: middle;
  }

  .d2h-file-name-wrapper {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 15px;
    width: 100%;
  }

  .d2h-file-name {
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .d2h-file-wrapper {
    border: 1px solid #ccd3db;
    border-radius: 0 0 4px 4px;
    border-top-width: 0;
    background-color: #fff;
  }

  .d2h-file-collapse {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
    display: none;
    font-size: 12px;
    justify-content: flex-end;
    padding: 4px 8px;
  }

  .d2h-file-collapse.d2h-selected {
    background-color: #c8e1ff;
  }

  .d2h-file-collapse-input {
    margin: 0 4px 0 0;
  }

  .d2h-diff-table {
    border-collapse: collapse;
    font-family: Menlo, Consolas, monospace;
    font-size: 13px;
    width: 100%;
  }

  .d2h-files-diff {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
  }

  .d2h-file-diff {
    overflow-y: hidden;
  }

  .d2h-file-diff.d2h-d-none,
  .d2h-files-diff.d2h-d-none {
    display: none;
  }

  .d2h-file-side-diff {
    display: inline-block;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 50%;
  }

  .d2h-code-line {
    padding: 0 8em;
  }

  .d2h-code-line,
  .d2h-code-side-line {
    display: inline-block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: 100%;
    background-color: transparent !important;
  }

  .d2h-code-side-line {
    padding: 0 4.5em;
  }

  .d2h-code-line-ctn {
    word-wrap: normal;
    background: none;
    display: inline-block;
    padding: 0;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    vertical-align: middle;
    white-space: pre;
    width: 100%;
  }

  .d2h-code-line del,
  .d2h-code-side-line del {
    background-color: rgba(234, 133, 115, 0.7);
  }

  .d2h-code-line del,
  .d2h-code-line ins,
  .d2h-code-side-line del,
  .d2h-code-side-line ins {
    border-radius: 0.2em;
    display: inline-block;
    margin-top: -1px;
    text-decoration: none;
    vertical-align: middle;
  }

  .d2h-code-line ins,
  .d2h-code-side-line ins {
    background-color: rgba(85, 188, 138, 0.7);
    text-align: left;
  }

  .d2h-code-line-prefix {
    word-wrap: normal;
    background: none;
    display: inline;
    padding: 0;
    white-space: pre;
  }

  .line-num1 {
    float: left;
  }

  .line-num1,
  .line-num2 {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0 0.5em;
    text-overflow: ellipsis;
    width: 3.5em;
  }

  .line-num2 {
    float: right;
  }

  .d2h-code-linenumber {
    background-color: rgba(239, 244, 249, 0.8);
    border: solid #eee;
    border-width: 0 1px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    display: inline-block;
    position: absolute;
    text-align: right;
    width: 7.5em;
  }

  .d2h-code-linenumber:after {
    content: '\\200b';
  }

  .d2h-code-side-linenumber {
    background-color: #fff;
    border: solid #eee;
    border-width: 0 1px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    padding: 0 0.5em;
    position: absolute;
    text-align: right;
    text-overflow: ellipsis;
    width: 4em;
  }

  .d2h-code-side-linenumber:after {
    content: '\\200b';
  }

  .d2h-code-side-emptyplaceholder,
  .d2h-emptyplaceholder {
    background-color: #f1f1f1;
    border-color: #e1e1e1;
  }

  .d2h-code-line-prefix,
  .d2h-code-linenumber,
  .d2h-code-side-linenumber,
  .d2h-emptyplaceholder {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .d2h-code-linenumber,
  .d2h-code-side-linenumber {
    direction: rtl;
  }

  .d2h-del {
    background-color: #fee8e9;
    border-color: #e9aeae;
  }

  .d2h-ins {
    background-color: rgba(162, 216, 187, 0.7);
    border-color: #b4e2b4;
  }

  .d2h-info {
    background-color: #f8fafd;
    border-color: #d5e4f2;
    color: rgba(0, 0, 0, 0.3);
  }

  .d2h-file-diff .d2h-del.d2h-change {
    background-color: rgba(250, 231, 229, 0.7);
  }

  .d2h-file-diff .d2h-ins.d2h-change {
    background-color: rgba(196, 230, 212, 0.7);
  }

  .d2h-file-list-wrapper {
    margin-bottom: 10px;
  }

  .d2h-file-list-wrapper a {
    color: #3572b0;
    text-decoration: none;
  }

  .d2h-file-list-wrapper a:visited {
    color: #3572b0;
  }

  .d2h-file-list-header {
    text-align: left;
  }

  .d2h-file-list-title {
    font-weight: 700;
  }

  .d2h-file-list-line {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
  }

  .d2h-file-list {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .d2h-file-list > li {
    border-bottom: 1px solid #ddd;
    margin: 0;
    padding: 5px 10px;
  }

  .d2h-file-list > li:last-child {
    border-bottom: none;
  }

  .d2h-file-switch {
    cursor: pointer;
    display: none;
    font-size: 10px;
  }

  .d2h-icon {
    fill: currentColor;
    margin-right: 10px;
    vertical-align: middle;
  }

  .d2h-deleted {
    color: #c33;
  }

  .d2h-added {
    color: #399839;
  }

  .d2h-changed {
    color: #d0b44c;
  }

  .d2h-moved {
    color: #3572b0;
  }

  .d2h-tag {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 10px;
    margin-left: 5px;
    padding: 0 2px;
  }

  .d2h-deleted-tag {
    border: 1px solid #c33;
  }

  .d2h-added-tag {
    border: 1px solid #399839;
  }

  .d2h-changed-tag {
    border: 1px solid #d0b44c;
  }

  .d2h-moved-tag {
    border: 1px solid #3572b0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 4px 4px 0 0;
  border: 1px solid #ccd3db;
  background-color: #eff4f9;

  .kubed-icon {
    margin-right: 4px;
  }

  .switch-mode {
    cursor: pointer;
  }
`;

export const Title = styled.span`
  margin-right: 4px;
  font-weight: 600;
  color: #36435c;
`;

export const Description = styled.span`
  margin-left: auto;
  font-weight: 600;
  color: #36435c;
`;
