import React from 'react';
import { StarTwoTone, DeleteTwoTone } from '@ant-design/icons';
const getTableColumns = (addFavFriendActionProps, removeFavFriendActionProps, deleteFriendsActionProps) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => {
                return (
                    <div key={`${record.id}#${record.name}`}>{text}</div>
                )
            }
        },
        {
            title: 'Favorite',
            key: 'isFavorite',
            dataIndex: 'isFavorite',
            render: (text, record) => {
                return (
                    <div key={`${record.id}#Fav#${record.name}`}>
                        {(() => {
                            const icon = record.isFavorite ? <StarTwoTone style={{ cursor: 'pointer' }} twoToneColor="green" onClick={() => { removeFavFriendActionProps(record) }} /> : <StarTwoTone twoToneColor="grey" style={{ cursor: 'pointer' }} onClick={() => { addFavFriendActionProps(record) }} />;
                            return <>{icon}</>
                        })()
                        }
                    </div>
                )
            }
        },
        {
            title: 'Delete Friend',
            key: 'isDeleted',
            dataIndex: 'isDeleted',
            render: (text, record) => (
                <div key={`${record.id}#del#${record.name}`}>
                    <DeleteTwoTone style={{ cursor: 'pointer' }} onClick={() => { deleteFriendsActionProps(record) }} />
                </div>
            ),
        },
    ];
    return columns
}

export { getTableColumns };