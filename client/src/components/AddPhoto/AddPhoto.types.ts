import { ReactNode, SyntheticEvent, FormEvent, ChangeEvent } from 'react';
import { AlbumType } from '../Albums/Album.types';
import {
	resetUploadImagesRequest,
	startUploadImageRequest,
	endUploadImageRequest,
	displayUploadImageSuccess,
} from '../../redux/request/actions';

export interface ViewProps {
	handleFileInput: () => void;
	handleDescInput: (e: FormEvent<HTMLInputElement>) => void;
	handleDateInput: (e: FormEvent<HTMLInputElement>) => void;
	handleSelectAlbumInput: (e: ChangeEvent<HTMLSelectElement>) => void;
	submitForm: (e: SyntheticEvent<HTMLButtonElement>) => Promise<void>;
	deletePhoto: (e: SyntheticEvent<HTMLButtonElement>) => void;
	photos: Array<HTMLImageElement>;
	albums: Array<AlbumType>;
	selectedAlbum: string;
	dates: string[];
}

export interface FormProps {
	handleFileInput: () => void;
}

export interface AlbumFormProps {
	children: ReactNode;
	submitForm: (e: SyntheticEvent<HTMLButtonElement>) => Promise<void>;
}

export interface GalleryPropsI {
	dates: string[];
	photos: any;
	handleDescInput: (e: FormEvent<HTMLInputElement>) => void;
	handleDateInput: (e: FormEvent<HTMLInputElement>) => void;
	deletePhoto: (e: SyntheticEvent<HTMLButtonElement>) => void;
}

export interface PhotoPropsI {
	date: string;
	index: number;
	photo: HTMLImageElement;
	handleDescInput: (e: FormEvent<HTMLInputElement>) => void;
	handleDateInput: (e: FormEvent<HTMLInputElement>) => void;
	deletePhoto: (e: SyntheticEvent<HTMLButtonElement>) => void;
}

export interface HandleDescInputState {
	desc: Array<string>;
}

export interface HandleDateInputState {
	createdDates: Array<string>;
}

export interface AddPhotoState {
	images: Array<File>;
	desc: Array<string>;
	createdDates: Array<string>;
	albums: Array<AlbumType>;
	selectedAlbum: string;
	sendedImages: number;
}

export type AddPhotoAlbum = {
	name: string;
	id: string;
};

export type SelectAlbumInputProps = {
	albums: Array<AlbumType>;
	handleSelectAlbumInput: (e: ChangeEvent<HTMLSelectElement>) => void;
	selectedAlbum: string;
};

export interface FileInputContainerProps {
	children: ReactNode;
}
