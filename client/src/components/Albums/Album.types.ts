import { FormEvent, SyntheticEvent, ReactNode } from 'react';

export interface AlbumType {
	name: string;
	description: string;
	beginningDate: number | string;
	endDate: number | string;
	_id?: string;
	authorsId?: Array<string>;
	children?: ReactNode;
	images?: Array<string>;
}

export interface AlbumTypeAndSetAlbum extends AlbumType {
	name: string;
	description: string;
	beginningDate: number | string;
	endDate: number | string;
	_id?: string;
	authorId?: Array<string>;
	setAlbum?: (e: SyntheticEvent<HTMLButtonElement>) => void;
	addUserToOtherAlbum?: (e: SyntheticEvent<HTMLButtonElement>) => void;
}

export interface AlbumViewProps {
	myAlbums: Array<AlbumType>;
	otherAlbums: Array<AlbumType>;
	toggleShowModal: () => void;
	showModalAddAlbum: boolean;
	handleInputChange: (e: FormEvent<HTMLInputElement>) => void;
	addAlbum: () => void;
	setAlbum: (e: SyntheticEvent<HTMLButtonElement>) => void;
	addUserToOtherAlbum: (e: SyntheticEvent<HTMLButtonElement>) => void;
}

export interface AddAlbumModalProps {
	show?: boolean;
	toggle?: () => void;
	handleInputChange: (e: FormEvent<HTMLInputElement>) => void;
	addAlbum: () => void;
}

export interface AlbumsState {
	showModalAddAlbum: boolean;
	name: string;
	description: string;
	beginningDate: string;
	endDate: string;
	myAlbums: Array<AlbumType>;
	otherAlbums: Array<AlbumType>;
}
